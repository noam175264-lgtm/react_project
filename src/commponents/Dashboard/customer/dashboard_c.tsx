import { Outlet, useFetcher } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Input from "../../inputs";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import SubjectIcon from '@mui/icons-material/Subject';
import DescriptionIcon from '@mui/icons-material/Description';
import ShowTickets from "../showTickets";
import CreateTicketDialog from "./createTicketDialog";

export interface Ticket {
    subject: string;
    description: string;
    
}

const DashboardC = () => {
    const [open, setOpen] = useState(false);
    const fetcher=useFetcher();
    const { control, handleSubmit, formState: { errors } } = useForm<Ticket>({
        defaultValues: {
            subject: "",
            description: ""
        },
    })
    const onSubmit = (data: Ticket) => {
        console.log(data);
        setOpen(false);
        const formData = new FormData();
        formData.append("subject", data.subject);
        formData.append("description", data.description);
        fetcher.submit(formData, { method: "post" });

    };


    return (
        <div>
            <h1>Customer Dashboard</h1>
            <CreateTicketDialog/>
            <ShowTickets users={[]}/>

        </div>
    );
}
export default DashboardC;