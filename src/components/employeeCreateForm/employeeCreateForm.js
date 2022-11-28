import { useState, useEffect } from 'react'
import Dropdown from '../dropdown/dropdown';

import './employeeCreateForm.scss';
import { DatePicker } from '../datePicker/datePicker';
import { InputRequired } from '../inputRequired/inputRequired';
import { states } from '../../dropdownData/states';
import { departments } from '../../dropdownData/departments';

export function EmployeeCreateForm(props) {

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
        props.setModal(true);
        console.log(employee)
    }
    
    return (
        <form className='employeeForm' onSubmit={handleSubmit}>
            <InputRequired 
                label="First Name"
                value={employee.firstName}
                onChange={handleChange('firstName')}
            />
            <InputRequired 
                label="Last Name"
                value={employee.lastName}
                onChange={handleChange('lastName')}
            />
            <DatePicker 
                label="Birth Date"
                onChange={handleChangeDate('birthDate')}
                value={employee.birthDate}
            />            
            <DatePicker 
                label="Starting Date"
                onChange={handleChangeDate('startingDate')}
                value={employee.startingDate}
            />
            <InputRequired 
                label="Street"
                value={employee.street}
                onChange={handleChange('street')}
            />
            <InputRequired 
                label="City"
                value={employee.city}
                onChange={handleChange('city')}
            />
            <Dropdown 
                label="State"
                value={employee.state}
                onChange={handleChange('state')}
                dropdownTitle="State"
                list={states}
            />
            <InputRequired 
                label='Zip Code'
                value={employee.zipCode}
                type='number'
                onChange={handleChange('zipCode')}
            />
            <Dropdown 
                label="Department"
                value={employee.department}
                onChange={handleChange('department')}
                dropdownTitle="Department"
                list={departments}
            />
            <button>SAVE</button>
        </form>
    )
}
