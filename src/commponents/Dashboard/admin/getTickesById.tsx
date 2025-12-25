import type { Ticket } from "../../../types";
import CreateTickets from "../createTickets";

interface GetTicketsByIDProps {
  userId: number;
  tickets: Ticket[];
}


const GetTicketsByID: React.FC<GetTicketsByIDProps> = (params: GetTicketsByIDProps) => {
    if (!params.tickets || !Array.isArray(params.tickets)) {
        return <div>No tickets available</div>;
    }

    const tickets_byId = params.tickets.filter(
        (ticket: Ticket) => ticket.created_by === params.userId
    )

    return (
        <>
            <CreateTickets tickets={tickets_byId} />
        </>
    )
}
export default GetTicketsByID;