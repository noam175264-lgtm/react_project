import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, AuthState } from "../types";
const storeUser = localStorage.getItem('user');
const storedToken = localStorage.getItem('token');

const initialState: AuthState = {
    isLoggedIn: !!storedToken,
    token: storedToken || null,
    user: storeUser ? JSON.parse(storeUser) : null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        loginSuccess: (state, action: PayloadAction<{ token: string; user: User }>) => {
            state.isLoggedIn = true;    
            state.token = action.payload.token;
            state.user = action.payload.user;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
        },
        logout: (state) => {
            state.isLoggedIn = false;      
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
    },
});
export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;