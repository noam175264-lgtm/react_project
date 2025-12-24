import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface DataState {
    users: any[];      
    priorities: any[];
    statuses: any[];
}

const initialState: DataState = {
    users: [],
    priorities: [],
    statuses: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<any[]>) => {
            state.users = action.payload;
        },
        setPriorities: (state, action: PayloadAction<any[]>) => {
            state.priorities = action.payload;
        },
        setStatuses: (state, action: PayloadAction<any[]>) => {
            state.statuses = action.payload;
        },
    },
});

export const { setUsers, setPriorities, setStatuses } = dataSlice.actions;
export default dataSlice.reducer;



