import type { ActionFunctionArgs } from "react-router-dom";
import api from "./api";

export const addUser = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const role = formData.get('role') as string;

    const payload = {
        name,
        email,
        password,
        role
    };
    
    try {
        const res = await api.post('/users', payload);
        return res.data;  
    } catch (error: any) {
        if (error.response?.status === 409) {
            return { error: "There is already a user with the same email, try again!" };  // 👈 תיקון: error לא erorr
        }
        return { error: "Failed to create user. Please try again." };
    }
}