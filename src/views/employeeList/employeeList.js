import { EmployeeDataTable } from "../../components/employeeDataTable/employeeDataTable";
import { columns } from "../../dataTableConfig/dataTableConfig";
import './employeeList.scss'

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { InputRequired } from "../../components/inputRequired/inputRequired";


export function EmployeeList() {

    const employeeListState = useSelector(state => state.employeeList.list)

    const [employeeListDataTable, setDataTable] = useState([])

    const [filteredList, setFilteredList] = useState([])
    const [filterValue, setFilterValue] = useState('')

    useEffect(() => {
        const indexedDataList = []
        employeeListState.forEach((employee, index) => {
            indexedDataList.push({
                id: index,
                firstName: employee.firstName,
                lastName: employee.lastName,
                startingDate: employee.startingDate,
                department: employee.department,
                birthDate: employee.birthDate,
                street: employee.street,
                city: employee.city,
                state: employee.state,
                zipCode: employee.zipCode,
            })
        })
        setDataTable(indexedDataList)
    },[employeeListState])

    useEffect(() => {
        if(filterValue.length < 3) {
            setFilteredList(employeeListDataTable)
        }
    },[employeeListDataTable, filterValue])

    const handleSearch = (e) => {
        setFilterValue(e.target.value)
        if(e.target.value.length >= 0) {
            setFilteredList(employeeListDataTable.filter(employee => 
                employee.firstName.includes(filterValue) ||
                employee.lastName.includes(filterValue) || 
                employee.startingDate.toString().includes(filterValue) ||
                employee.department.includes(filterValue) ||
                employee.birthDate.toString().includes(filterValue) ||
                employee.street.includes(filterValue) ||
                employee.city.includes(filterValue) ||
                employee.state.includes(filterValue) ||
                employee.zipCode.toString().includes(filterValue)
            ))
        }
    }

    return (
        <div className="employeeList__body">
            <section className="employeeList__wrapper">
                <div className="employeeList__header">
                    <InputRequired 
                        label="Search Employee"
                        value={filterValue}
                        onChange={handleSearch}
                    />
                </div>
                <EmployeeDataTable 
                    rows={filteredList && filteredList}
                    columns={columns}
                />
            </section>
        </div>
    )
}