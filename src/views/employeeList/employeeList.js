import { EmployeeDataTable } from "../../components/employeeDataTable/employeeDataTable";
import { columns } from "../../dataTableConfig/dataTableConfig";
import './employeeList.scss'

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { InputRequired } from "../../components/inputRequired/inputRequired";


export function EmployeeList() {

    const employeeListState = useSelector(state => state.employeeList.list)
    const [employeeListDataTable, setDataTable] = useState([])
    const [filter, setFilter] = useState('')
    useEffect(() => {
        const indexedDataList = []
        employeeListState.map((employee, index) => {
            indexedDataList.push({
                id: index,
                firstName: employee.firstName,
                lastName: employee.lastName,
                startingDate: employee.startingDate,
                departement: employee.departement,
                birthDate: employee.birthDate,
                street: employee.street,
                city: employee.city,
                state: employee.state,
                zipCode: employee.zipCode,
            })
        })
        setDataTable(indexedDataList)
    },[employeeListState])

    const handleSearch = (e) => {

    }

    return (
        <section className="employeeList__wrapper">
            <div>
                <InputRequired 
                    label="Search"
                    value={filter}
                    onChange={handleSearch}
                />
            </div>
            <EmployeeDataTable 
                rows={employeeListDataTable && employeeListDataTable}
                columns={columns}
            />
        </section>
    )
}