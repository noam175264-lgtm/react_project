import { Box,  Typography, type SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import Selector from "./selectors";
import { getStatus } from "../../service/ticketService";
import { useDispatch, useSelector } from "react-redux";
import type { RootState} from "../../store/store";
import { setStatuses } from "../../store/dataSlice";
import { showError, showSuccess } from "../../utils/sweetAlertConfig";

interface UpdateStatusProps {
    ticketId: Number,
    priority: Number,
    assign_to: Number
}

interface TicketStatus {
    status_id: Number,
    priority_id: Number,
    assigned_to: Number
}

const UpdateStatus = (params: UpdateStatusProps) => {
    const status = useSelector((state: RootState) => state.data.statuses);
    const [isLoading, setIsLoading] = useState(true);
    const fetcher = useFetcher();
    const dispatch = useDispatch();
    const [error, setError] = useState();

    useEffect(() => {
        if (status.length === 0) {
            const fetchStatus = async () => {
                try {
                    setIsLoading(true);
                    const data = await getStatus();
                    dispatch(setStatuses(data));
                } catch (err: any) {
                    setError(err.message || "Error loading statuses");
                    showError(err.message || "Failed to load statuses", "Oops...");
                } finally {
                    setIsLoading(false);
                }
            };
            fetchStatus();
        } else {
            setIsLoading(false);
        }
    }, [dispatch, status.length]);

    useEffect(() => {
        if (fetcher.state === "idle" && fetcher.data) {
            if (fetcher.data.success) {
                showSuccess('Status updated successfully!', 'Good job!');
            } else if (fetcher.data.error) {
                showError(fetcher.data.error || 'Failed to update status', 'Oops...');
            }
        }
    }, [fetcher.state, fetcher.data]);

    const handleChange = (event: SelectChangeEvent) => {
        const select = event.target.value;

        const data: TicketStatus = {
            status_id: select ? parseInt(select) : 1,
            priority_id: params.priority,
            assigned_to: params.assign_to
        }

        const formData = new FormData();
        formData.append("status_id", data.status_id.toString());
        formData.append("priority_id", data.priority_id.toString());
        formData.append("assigned_to", data.assigned_to.toString());

        fetcher.submit(formData, {
            method: "patch",
            action: `/updateStatus/${params.ticketId}`
        });
    };

    if (isLoading) {
        return (
            <Box sx={{ minWidth: 120 }}>
                <Typography variant="body2" color="textSecondary">Loading statuses...</Typography>
            </Box>
        );
    }

    if (status.length === 0) {
        return (
            <Box sx={{ minWidth: 120 }}>
                <Typography variant="body2" color="error">No statuses available</Typography>
            </Box>
        );
    }

    return (
        <Selector name="status" data={status} func={handleChange} />
    );
}

export default UpdateStatus;