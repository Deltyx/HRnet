import { useState } from "react";
import { EmployeeCreateForm } from "../../components/employeeCreateForm/employeeCreateForm";
import { Modal } from "../../components/modal/modal";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../features/employeeListSlice";
import dayjs from "dayjs";
import "./homepage.scss";


export function Homepage() {
    const dispatch = useDispatch()
    const [isModalOpen, setModalOpen] = useState(false)
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        birthDate: dayjs(new Date()).format('MM/DD/YYYY'),
        startingDate: dayjs(new Date()).format('MM/DD/YYYY'),
        street: "",
        city: "",
        state: "",
        zipCode: 0,
        department: "",
    })

    const handleChange = (prop) => (e) => {
        setEmployee({ ...employee, [prop]: e.target.value })
    }

    const handleChangeDate = (prop) => (newDate) => {
        const formatedDate = dayjs(newDate.$d).format('MM/DD/YYYY')
        setEmployee({ ...employee, [prop]: formatedDate })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const list = []
            dispatch(addEmployee(...list, employee))

            setModalOpen(true);
        } catch (err) {
            console.log(err)
        }
    }

    const hideModal = () => {
        setModalOpen(false)
    }

    return (
        <>
            <div className="homepage__body">
                <EmployeeCreateForm 
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onChangeDate={handleChangeDate}
                    employee={employee}
                />
            </div>
            {isModalOpen && 
                <Modal
                    onClose={hideModal} 
                    title='Employee Created !'
                />
            }
        </>
    )
}