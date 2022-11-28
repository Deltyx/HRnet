import { EmployeeDataTable } from "../../components/employeeDataTable/employeeDataTable";
import './employeeList.scss'


export function EmployeeList() {


    return (
        <section className="employeeList__wrapper">
            <EmployeeDataTable />
        </section>
    )
}