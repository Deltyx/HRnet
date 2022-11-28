import { useState } from "react";
import { EmployeeCreateForm } from "../../components/employeeCreateForm/employeeCreateForm";
import { Modal } from "../../components/modal/modal";


export function Homepage() {
    const [isModalOpen, setModalOpen] = useState(false)

    return (
        <>
            <EmployeeCreateForm setModal={setModalOpen}/>
            {isModalOpen && <Modal />}
        </>
    )
}