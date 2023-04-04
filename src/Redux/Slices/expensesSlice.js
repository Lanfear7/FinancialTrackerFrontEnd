import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expensesToggle : false,
    expenses: []
}

export const expensesSlice = createSlice({
    name: 'Expenses',
    initialState,
    reducers: {
        changeExpenseToggle: (state, {payload}) =>{
            state.expensesToggle = payload
        },
        addExpenseState: (state, {payload}) =>{
            state.expenses = payload
        }
    }
})

export const { changeExpenseToggle, addExpenseState } = expensesSlice.actions

export default expensesSlice.reducer