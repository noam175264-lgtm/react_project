
import { Box, Container } from "@mui/material";
import ShowTicketsBt from "../showTicketsBt";
import CreateTicketDialog from "./createTicketDialog";

const DashboardC = () => {

    return (
        <div>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <CreateTicketDialog/>
                    <ShowTicketsBt/>
                </Box>
            </Container>
        </div>
    );
}
export default DashboardC;