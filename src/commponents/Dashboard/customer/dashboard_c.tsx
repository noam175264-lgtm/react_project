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
import type { TicketFormInput } from "../../../types";

const DashboardC = () => {

    return (
        <div>
            <h1>Customer Dashboard</h1>
            <CreateTicketDialog/>
            <ShowTickets users={[]}/>

        </div>
    );
}
export default DashboardC;