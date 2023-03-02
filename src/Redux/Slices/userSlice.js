import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : '',
  JWT : '',
  trackers : [],
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
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, currentUserData, addUserTracker } = userSlice.actions

export default userSlice.reducer