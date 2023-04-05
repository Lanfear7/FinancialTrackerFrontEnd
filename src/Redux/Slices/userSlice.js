import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : '',
  JWT : '',
  monthlySavings : 0,
  monthlyIncome : 0
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    addUser: (state, {payload}) => {
        state.JWT = payload
    },
    removeUser: (state) => {
        state.JWT = ''
        state.user = ''
    },
    currentUserData: (state, {payload}) => {
      state.user = payload
    },
    updateMonthlySavings : (state, {payload}) => {
      state.monthlySavings = payload
    },
    updateMonthlyIncome : (state, {payload}) =>{
      state.monthlyIncome = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  addUser,
  removeUser, 
  currentUserData, 
  updateMonthlySavings,
  updateMonthlyIncome
  } = userSlice.actions

export default userSlice.reducer