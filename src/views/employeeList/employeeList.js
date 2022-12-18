import { EmployeeDataTable } from "../../components/employeeDataTable/employeeDataTable";
import { columns } from "../../dataTableConfig/dataTableConfig";
import './employeeList.scss'

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";



export function EmployeeList() {

    const employeeListState = useSelector(state => state.employeeList.list)

    const [employeeListDataTable, setDataTable] = useState([])

    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        const indexedDataList = []
        employeeListState.forEach((employee, index) => {
            indexedDataList.push({
                id: index,
                firstName: employee.firstName,
                lastName: employee.lastName,
                startingDate: employee.startingDate.toString(),
                department: employee.department,
                birthDate: employee.birthDate.toString(),
                street: employee.street,
                city: employee.city,
                state: employee.state,
                zipCode: employee.zipCode.toString(),
            })
        })
        setDataTable(indexedDataList)
    },[employeeListState])

    useEffect(() => {
        setFilteredList(employeeListDataTable)
    },[employeeListDataTable])

    return (
        <div className="employeeList__body">
            <section className="employeeList__wrapper">
                <div className="employeeList__header">
                    <h1>Employees List</h1>
                </div>
                <EmployeeDataTable 
                    rows={filteredList && filteredList}
                    columns={columns}
                />
            </section>
        </div>
    )
}