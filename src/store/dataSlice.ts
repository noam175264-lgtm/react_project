import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { DataState } from "../types";

const initialState: DataState = {
    users: [],
    priorities: [],
    statuses: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPriorities: (state, action: PayloadAction<any[]>) => {
            state.priorities = action.payload;
        },
        setStatuses: (state, action: PayloadAction<any[]>) => {
            state.statuses = action.payload;
        },
    },
});

export const { setPriorities, setStatuses } = dataSlice.actions;
export default dataSlice.reducer;



