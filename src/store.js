import { configureStore } from "@reduxjs/toolkit";
import employeeListReducer from "./features/employeeListSlice";

export const store = configureStore({
    reducer: {
        employeeList: employeeListReducer
    }
})