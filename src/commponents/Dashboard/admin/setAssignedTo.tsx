import { Box, Typography, type SelectChangeEvent } from "@mui/material";
import {  useState } from "react";
import { useFetcher, useRouteLoaderData } from "react-router-dom";
import type { User } from "../../../types";
import Selector from "../selectors";

interface SetAssignedToProps {
  ticketId: number;
  priority: number;
  status_id: number;
  assign_to: number;
}

interface TicketAssignedTo {
  status_id: number;
  priority_id: number;
  assigned_to: number;
}


const SetAssignedTo = (params: SetAssignedToProps) => {
    const users = useRouteLoaderData("dashboardChild") as User[];
    const [change, setChange] = useState(Number);
    const [isLoading, setIsLoading] = useState(true);
    const fetcher = useFetcher();
    const [error, setError] = useState()



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

        if (!users || users.length === 0) {
            return (
                <Box sx={{ minWidth: 120 }}>
                    <Typography variant="body2" color="error">אין סטטוסים זמינים</Typography>
                </Box>
            );

        };

    }
    const agents = users.filter((user: User) => user.role === "agent");
    return (
        <Selector name="assigned to" data={agents} func={handleChange} />
    );
}
export default SetAssignedTo;