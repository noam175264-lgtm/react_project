import { IconButton, CircularProgress } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useFetcher } from "react-router-dom";
import { showSuccess, showError, confirmDelete } from "../../../utils/sweetAlertConfig";
import { useEffect } from "react";

interface DeleteTicketprop {
    ticketId: Number
}

const DeleteTicketBt: React.FC<DeleteTicketprop> = (params: DeleteTicketprop) => {
    const fetcher = useFetcher();

    useEffect(() => {
        if (fetcher.state === "idle" && fetcher.data) {
            if (fetcher.data.error) {
                showError(fetcher.data.error, 'Oops...');
            } else {
                showSuccess('Ticket deleted successfully!', 'Deleted!');
            }
        }
    }, [fetcher.state, fetcher.data]);

    const delete1 = async () => {
        const result = await confirmDelete('this ticket');
        
        if (result.isConfirmed) {
            fetcher.submit(null, { 
                method: "DELETE", 
                action: `/DeleteTicketBt/${params.ticketId}` 
            });
        }
    };

    if (fetcher.state === "submitting" || fetcher.state === "loading") {
        return (
            <IconButton disabled size="small">
                <CircularProgress size={20} color="error" />
            </IconButton>
        );
    }

    return (
        <IconButton color="error" onClick={delete1} size="small">
            <DeleteIcon />
        </IconButton>
    );
}

export default DeleteTicketBt;