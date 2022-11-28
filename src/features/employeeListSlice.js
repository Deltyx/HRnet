import { createSlice } from '@reduxjs/toolkit'

const employeeListSlice = createSlice({
    name: 'employeeList',
    initialState: { list: []},
    reducers: {
        addEmployee: (state, action) => {
            state.list.push(action.payload)
        },
        clearEmployeeList: (state, action) => {
            state.list = []
        }
    }
})

export const { addEmployee, clearEmployeeList } = employeeListSlice.actions
export default employeeListSlice.reducer