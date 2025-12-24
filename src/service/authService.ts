
import api from "./api";


export const LoginService = async (email: string, password: string) => {
    try {
        const response = await api.post('/auth/login', {
            email,
            password
        });
        return { success: true, data: response.data };
    }
    catch (error) {
        return {
            success: false,
            error: "Login failed, please check your email or password"
        };
    }
}


export const RegisterService = async (name: string, email: string, password: string) => {
    const newData = { name, email, password };

    try {
        await api.post('/auth/register', newData);
        return null; 
    } catch (error) {
        return "Registration failed. Check if you have already registered before.";
    }
}
