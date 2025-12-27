import { useLoaderData } from "react-router-dom";
import type {  Ticket } from "../../types";
import CreateTickets from "./createTickets";

const ShowTickets = () => {
    const tickets: Ticket[] = useLoaderData() as Ticket[];

    return (
        <>
            <CreateTickets tickets={tickets} />
        </>
    );
}
export default ShowTickets;