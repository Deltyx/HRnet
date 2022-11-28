import Dropdown from '../dropdown/dropdown';

import './employeeCreateForm.scss';
import { DatePicker } from '../datePicker/datePicker';
import { InputRequired } from '../inputRequired/inputRequired';
import { states } from '../../dropdownData/states';
import { departments } from '../../dropdownData/departments';

export function EmployeeCreateForm(props) {
    
    return (
        <form className='employeeForm' onSubmit={props.onSubmit}>
            <InputRequired 
                label="First Name"
                value={props.employee.firstName}
                onChange={props.onChange('firstName')}
            />
            <InputRequired 
                label="Last Name"
                value={props.employee.lastName}
                onChange={props.onChange('lastName')}
            />
            <DatePicker 
                label="Birth Date"
                onChange={props.onChangeDate('birthDate')}
                value={props.employee.birthDate}
            />            
            <DatePicker 
                label="Starting Date"
                onChange={props.onChangeDate('startingDate')}
                value={props.employee.startingDate}
            />
            <InputRequired 
                label="Street"
                value={props.employee.street}
                onChange={props.onChange('street')}
            />
            <InputRequired 
                label="City"
                value={props.employee.city}
                onChange={props.onChange('city')}
            />
            <Dropdown 
                label="State"
                value={props.employee.state}
                onChange={props.onChange('state')}
                dropdownTitle="State"
                list={states}
            />
            <InputRequired 
                label='Zip Code'
                value={props.employee.zipCode}
                type='number'
                onChange={props.onChange('zipCode')}
            />
            <Dropdown 
                label="Department"
                value={props.employee.department}
                onChange={props.onChange('department')}
                dropdownTitle="Department"
                list={departments}
            />
            <button>SAVE</button>
        </form>
    )
}
