import {  type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router-dom";
import api from "./api";

export const getComentsByTicketId = async ({params}: LoaderFunctionArgs) => {
    const { ticketId } = params;
    const response = await api.get(`/tickets/${ticketId}/comments`);
    return response.data;
}

export const addCommentToTicket = async ({params,request}:ActionFunctionArgs) => {
    const {ticketId}=params;
    const formData=await request.formData()
    const content =formData.get("content")
    const response = await api.post(`/tickets/${ticketId}/comments`, {
        content
    });
    console.log(response.data)
    return response.data;
}