import { Box,  Typography, type SelectChangeEvent } from "@mui/material";
import {  useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import type { User } from "./dashboard_ad";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { getAllUsers } from "../../../service/ticketService";
import { setUsers } from "../../../store/dataSlice";
import Selector from "../selectors";
import { showError, showSuccess } from "../../../utils/sweetAlertConfig";
interface SetAssignedToprops {
    ticketId: number,
    priority: Number,
    status_id: Number,
    assign_to: Number
}
interface TicketAssignedTo {
    status_id: Number,
    priority_id: Number,
    assigned_to: Number
}


const SetAssignedTo = (params: SetAssignedToprops) => {
    let users = useSelector((state: RootState) => state.data.users)
    const [change, setChange] = useState(Number);
    const [isLoading, setIsLoading] = useState(true);
    const fetcher = useFetcher();
    const dispatch = useDispatch();
    const [error, setError] = useState()

    useEffect(() => {
        if (users.length === 0) {
            const fetchAgent = async () => {
                try {
                    setIsLoading(true);
                    const data = await getAllUsers();
                    dispatch(setUsers(data));
                } catch (err: any) {
                    setError(err.message || "Error loading users");
                    showError(err.message || "Failed to load agents", "Oops...");
                } finally {
                    setIsLoading(false);
                }
            };
            fetchAgent();
        } else {
            setIsLoading(false);
        }
    }, [dispatch, users.length]);

    useEffect(() => {
        if (fetcher.state === "idle" && fetcher.data) {
            if (fetcher.data.success) {
                showSuccess('Agent assigned successfully!', 'Good job!');
            } else if (fetcher.data.error) {
                showError(fetcher.data.error || 'Failed to assign agent', 'Oops...');
            }
        }
    }, [fetcher.state, fetcher.data]);

    const handleChange = (event: SelectChangeEvent) => {
        setChange(parseInt(event.target.value));
        const select = event.target.value;
        const data: TicketAssignedTo = {
            status_id: params.status_id,
            priority_id: params.priority,
            assigned_to: select ? parseInt(select) : 2
        }
        const formData = new FormData();
        formData.append("status_id", (data.status_id || 0).toString());
        formData.append("priority_id", (data.priority_id || 0).toString());
        formData.append("assigned_to", (data.assigned_to || 2).toString());
        fetcher.submit(formData, { method: "patch", action: `/setAssignedTo/${params.ticketId}` }
        );
        if (isLoading) {
            return (
                <Box sx={{ minWidth: 120 }}>
                    <Typography variant="body2" color="textSecondary">טוען עדיפיות...</Typography>
                </Box>
            );
        }

        if (users.length === 0) {
            return (
                <Box sx={{ minWidth: 120 }}>
                    <Typography variant="body2" color="error">אין סטטוסים זמינים</Typography>
                </Box>
            );

        };

    }
    return (
        <Selector name="assigned to" data={users = users.filter((user: User) => user.role == "agent")} func={handleChange} />
    )
}
export default SetAssignedTo;