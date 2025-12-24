import { useLoaderData } from "react-router-dom";
import type { Ticket } from "../showTickets";
import CreateTickets from "../createTickets";
import type { User } from "./dashboard_ad";
interface GetTicketsByIDprop {
    userId: Number,
    users:User[]
}


const GetTicketsByID: React.FC<GetTicketsByIDprop> = (params: GetTicketsByIDprop) => {
    const tickets: Ticket[] = useLoaderData() as Ticket[];
    const tickets_byId = tickets.filter((ticket: Ticket) => ticket.created_by === params.userId)
    return (
        <>
            <CreateTickets tickets={tickets_byId} ></CreateTickets>
        </>
    )
}
export default GetTicketsByID;