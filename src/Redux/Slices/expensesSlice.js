import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expensesToggle : false
}

export const expensesSlice = createSlice({
    name: 'Expenses',
    initialState,
    reducers: {
        changeExpenseToggle: (state, {payload}) =>{
            console.log(payload)
            state.expensesToggle = payload
        }
    }
})

export const { changeExpenseToggle } = expensesSlice.actions

export default expensesSlice.reducer