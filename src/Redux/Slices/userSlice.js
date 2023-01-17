import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
const initialState = {
  user: '',
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    addUser: (state, {payload}) => {
        state.user = payload
    },
    removeUser: (state) => {
        state.user = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer