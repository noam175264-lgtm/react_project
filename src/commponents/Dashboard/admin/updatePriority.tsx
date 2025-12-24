import { Box, Typography, type SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPrority } from "../../../service/ticketService";
import { setPriorities } from "../../../store/dataSlice";
import type { RootState } from "../../../store/store";
import Selector from "../selectors";
import { showSuccess, showError } from "../../../utils/sweetAlertConfig";

interface UpdatePriorityprops {
    ticketId: Number,
    status_id: Number,
    priority: Number,
    assigned_to: Number
}

interface TicketStatus {
    status_id: Number,
    priority_id: Number,
    assigned_to: Number
}

const UpdatePriority = (params: UpdatePriorityprops) => {
    const priority = useSelector((state: RootState) => state.data.priorities)
    const [change, setChange] = useState(Number);
    const [isLoading, setIsLoading] = useState(true);
    const fetcher = useFetcher();
    const dispatch = useDispatch();
    const [error, setError] = useState()

    useEffect(() => {
        if (priority.length === 0) {
            const fetchPriority = async () => {
                try {
                    setIsLoading(true);
                    const data = await getPrority();
                    dispatch(setPriorities(data));
                } catch (err: any) {
                    setError(err.message || "Error loading priorities");
                    showError(err.message || "Failed to load priorities", "Oops...");
                } finally {
                    setIsLoading(false);
                }
            };
            fetchPriority();
        } else {
            setIsLoading(false);
        }
    }, [dispatch, priority.length]);

  
    useEffect(() => {
        if (fetcher.state === "idle" && fetcher.data) {
            if (fetcher.data.success) {
                showSuccess('Priority updated successfully!', 'Good job!');
            } else if (fetcher.data.error) {
                showError(fetcher.data.error || 'Failed to update priority', 'Oops...');
            }
        }
    }, [fetcher.state, fetcher.data]);

    const handleChange = (event: SelectChangeEvent) => {
        setChange(parseInt(event.target.value));
        const select = event.target.value;

        const data: TicketStatus = {
            status_id: params.status_id,
            priority_id: select ? parseInt(select) : 1,
            assigned_to: params.assigned_to
        }
        
        const formData = new FormData();
        formData.append("status_id", data.status_id.toString());
        formData.append("priority_id", data.priority_id.toString());
        formData.append("assigned_to", data.assigned_to.toString());

        fetcher.submit(formData, { 
            method: "patch", 
            action: `/updatePriority/${params.ticketId}` 
        });
    };

    if (isLoading) {
        return (
            <Box sx={{ minWidth: 120 }}>
                <Typography variant="body2" color="textSecondary">Loading priorities...</Typography>
            </Box>
        );
    }

    if (priority.length === 0) {
        return (
            <Box sx={{ minWidth: 120 }}>
                <Typography variant="body2" color="error">No priorities available</Typography>
            </Box>
        );
    }

    return (
        <Selector name="priority" data={priority} func={handleChange} />
    )
}

export default UpdatePriority;