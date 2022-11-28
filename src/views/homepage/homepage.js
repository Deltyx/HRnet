import { useState } from "react";
import { EmployeeCreateForm } from "../../components/employeeCreateForm/employeeCreateForm";
import { Modal } from "../../components/modal/modal";


export function Homepage() {
    const [isModalOpen, setModalOpen] = useState(false)
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        birthDate: new Date(),
        startingDate: new Date(),
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
        setEmployee({ ...employee, [prop]: newDate.$d })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalOpen(true);
        console.log(employee)
    }

    return (
        <>
            <EmployeeCreateForm 
                onChange={handleChange}
                onSubmit={handleSubmit}
                onChangeDate={handleChangeDate}
                employee={employee}
            />
            {isModalOpen && <Modal onClose={setModalOpen}/>}
        </>
    )
}