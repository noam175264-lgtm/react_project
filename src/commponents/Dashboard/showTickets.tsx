import { useLoaderData } from "react-router-dom";

import type { User } from "./admin/dashboard_ad";
import CreateTickets from "./createTickets";
interface ShowTicketsprop {
    users: User[],
}
export interface Ticket {
    id: number;
    subject: string;
    description: string;
    status_id: number;
    priority_id: number;
    status_name: string;
    priority_name: string;
    created_by: number;
    assigned_to: number;
    created_at: string;
    updated_at: string;
}
const ShowTickets: React.FC<ShowTicketsprop> = (params: ShowTicketsprop) => {
    const tickets: Ticket[] = useLoaderData() as Ticket[];

    if (!tickets || tickets.length === 0) {
        return (
            <div>
                <p>No tickets found or loading failed.</p>
            </div>
        );
    }
    return (
        <>
        <CreateTickets tickets={tickets} />
        </>
    );
}
export default ShowTickets;