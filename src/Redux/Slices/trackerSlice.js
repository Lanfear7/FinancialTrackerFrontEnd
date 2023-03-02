import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trackers : [],
    trackerPopUp : false,
    trackerQuery : false
}

export const trackerSlice = createSlice({
    name: 'Tracker',
    initialState,
    reducers: {
        addUserTracker: (state, {payload}) => {
            state.trackers = payload
        },
        triggerTrackerPopUp: (state, {payload}) =>{
            state.trackerPopUp = payload
        },
        queryTrackers: (state, {payload}) => {
            state.trackerQuery = payload
        }
    }
})

export const { addUserTracker, triggerTrackerPopUp, queryTrackers } = trackerSlice.actions

export default trackerSlice.reducer