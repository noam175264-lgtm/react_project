import { useLoaderData } from "react-router-dom";
import type { User, Ticket } from "../../types";
import CreateTickets from "./createTickets";

interface ShowTicketsProps {
  users: User[];
}
const ShowTickets: React.FC<ShowTicketsProps> = (params: ShowTicketsProps) => {
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