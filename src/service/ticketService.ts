
import type { ActionFunctionArgs } from 'react-router-dom';
import api from './api';

export const getAllTickets = async () => {
    const response = await api.get('/tickets');
    return response.data;
}

export const getTicketsById = async (id: Number) => {
    const response = await api.get(`/tickets/${id}`);
    return response.data;
}

export const createTicket = async (subject: string, description: string) => {
    const res = await api.post('/tickets', {
        subject,
        description
    });
    return res.data;
}

export const createTicketAction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const subject = formData.get('subject') as string;
    const description = formData.get('description') as string;
    return await createTicket(subject, description);
}

export const deleteTicket = async ({ params }: ActionFunctionArgs) => {
    const { ticketId } = params;
    
    try {
        const res = await api.delete(`/tickets/${ticketId}`);
        return res.data;  
    } catch (error: any) {
        return { error: "Unable to delete a ticket with comments" };  // שגיאה
    }
}

export const setStatus = async ({ request, params }: ActionFunctionArgs) => {
    const { ticketId } = params;
    const formData = await request.formData()
    const status_id = Number(formData.get("status_id"))
    const priority_id = Number(formData.get("priority_id"))

    const response = await api.patch(`/tickets/${ticketId}`, {
        status_id,
        priority_id,

    });
    return response.data;
}

export const setPriority = async ({ request, params }: ActionFunctionArgs) => {
    const { ticketId } = params;
    const formData = await request.formData()
    const newData = {
        status_id: Number(formData.get("status_id")),
        priority_id: Number(formData.get("priority_id")),
        assigned_to: Number(formData.get("assigned_to"))
    }
    try {
        const response = await api.patch(`/tickets/${ticketId}`, newData);
        return response.data;
    } catch (error: any) {
        console.error("Server responded with:", error.response?.data);
        return { error: error.response?.data?.message || "update erroe" };
    }
}

export const getAllUsers = async () => {
    const response = await api.get('/users');
    return response.data;
}
export const getStatus = async () => {
    const response = await api.get('/statuses');
    return response.data;

}
export const addStatus = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const payload = {
        name: name
    };
    const res = await api.post('/statuses', payload);
    return res.data;
}
export const getPrority = async () => {
    const response = await api.get('/priorities');
    return response.data;

}
export const addPririty = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const payload = {
        name: name
    };
    const res = await api.post('/priorities', payload);
    return res.data;
}