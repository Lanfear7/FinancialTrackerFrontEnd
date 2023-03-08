import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slices/userSlice'
import trackerReducer from './Slices/trackerSlice'
import expensesReducer from './Slices/expensesSlice'

export const store = configureStore({
  reducer: {
    User: userReducer,
    Tracker : trackerReducer,
    Expenses : expensesReducer
  },
})
