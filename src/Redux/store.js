import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slices/userSlice'
import trackerReducer from './Slices/trackerSlice'

export const store = configureStore({
  reducer: {
    User: userReducer,
    Tracker : trackerReducer
  },
})
