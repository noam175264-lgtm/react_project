import { Alert, Box, Button, Card, CardActions, CardContent, Chip, Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from "@mui/material";
import type { Ticket } from "../../types";
import UpdatePriority from "./admin/updatePriority";
import SetAssignedTo from "./admin/setAssignedTo";
import UpdateStatus from "./updateStatus";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DeleteTicketBt from "./admin/deleteTicketBt";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { getColorByName } from "../../utils/colorHelper";
import React from "react";

interface CreateTicketsProps {
  tickets: Ticket[];
}

const CreateTickets: React.FC<CreateTicketsProps> = (params: CreateTicketsProps) => {
    const { user } = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate()
    const [openDialog, setOpenDialog] = useState<number | null>(null);

    return (
        <>
            {params.tickets.map((ticket: Ticket) =>
                <React.Fragment key={ticket.id}>
                    <Card
                        key={ticket.id}
                        sx={{
                            minWidth: 275,
                            borderRadius: 4,
                            border: '2px solid',
                            borderColor: 'divider',
                            boxShadow: 0,
                            '&:hover': {
                                borderColor: 'primary.main',
                                boxShadow: 4
                            },
                            mt: 3
                        }}
                    >
                        <CardContent sx={{ pb: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography component="div" variant="subtitle2" fontWeight={700} color="primary.main">
                                    {ticket.subject}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Chip
                                        label={ticket.status_name}
                                        color={getColorByName(ticket.status_name)}
                                        size="medium"
                                        sx={{ fontWeight: 700, px: 1 }}
                                    />
                                    {user?.role === "admin" && (
                                        <>
                                            <IconButton
                                                color="primary"
                                                onClick={() => setOpenDialog(ticket.id)}
                                                size="small"
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <DeleteTicketBt ticketId={ticket.id} />
                                        </>
                                    )}
                                </Box>
                            </Box>

                            <Typography component="div" variant="body1" color="text.primary" sx={{ mb: 3 }}>
                                {ticket.description}
                            </Typography>

                            <Grid container spacing={2} alignItems="center">
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                        <CalendarTodayIcon fontSize="small" color="action" />
                                        <Typography component="div" variant="body2" fontWeight={500}>
                                            {new Date(ticket.created_at).toLocaleDateString()}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Chip
                                        label={`Priority: ${ticket.priority_name}`}
                                        color={getColorByName(ticket.priority_name)}
                                        size="medium"
                                        sx={{ fontWeight: 600, width: '50%' }}
                                    />
                                </Grid>

                                {ticket.assigned_to && (
                                    <Grid size={{ xs: 12 }}>
                                        <Alert severity="info" icon={false} sx={{ py: 0.5 }}>
                                            <Typography component="div" variant="body2" fontWeight={600} >
                                                👤 {ticket.assigned_to}
                                            </Typography>
                                        </Alert>
                                    </Grid>
                                )}

                                {user?.role === "agent" && (
                                    <Grid size={{ xs: 12 }}>
                                        <UpdateStatus
                                            ticketId={ticket.id}
                                            priority={ticket.priority_id}
                                            assign_to={ticket.assigned_to}
                                        />
                                    </Grid>
                                )}
                            </Grid>
                        </CardContent>

                        <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={<ChatBubbleOutlineIcon />}
                                onClick={() => navigate(`/showComents/${ticket.id}`)}
                                sx={{
                                    py: 1.5,
                                    textTransform: 'none',
                                    fontWeight: 600
                                }}
                            >
                                View Comments
                            </Button>
                        </CardActions>
                    </Card>

                    {/* Admin Edit Dialog */}
                    <Dialog
                        open={openDialog === ticket.id}
                        onClose={() => setOpenDialog(null)}
                        maxWidth="sm"
                        fullWidth
                        PaperProps={{
                            sx: {
                                borderRadius: 4,
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                                p: 1
                            }
                        }}
                    >
                        <DialogTitle
                            sx={{
                                fontSize: '24px',
                                fontWeight: 600,
                                color: '#5f6368',
                                pb: 1,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            <EditIcon color="primary" />
                            Edit Ticket
                        </DialogTitle>
                        <DialogContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 2 }}>
                                <UpdatePriority
                                    ticketId={ticket.id}
                                    status_id={ticket.status_id}
                                    priority={ticket.priority_id}
                                    assigned_to={ticket.assigned_to}
                                />
                                <SetAssignedTo
                                    ticketId={ticket.id}
                                    status_id={ticket.status_id}
                                    priority={ticket.priority_id}
                                    assign_to={ticket.assigned_to}
                                />
                                <UpdateStatus
                                    ticketId={ticket.id}
                                    priority={ticket.priority_id}
                                    assign_to={ticket.assigned_to}
                                />
                            </Box>
                        </DialogContent>
                        <Box sx={{ display: 'flex', gap: 2, p: 2, justifyContent: 'flex-end' }}>
                            <Button
                                onClick={() => setOpenDialog(null)}
                                sx={{
                                    textTransform: 'none',
                                    px: 3,
                                    color: '#757575'
                                }}
                            >
                                Close
                            </Button>
                        </Box>
                    </Dialog>
                
                </React.Fragment >
            )}
        </>
    )
}
export default CreateTickets;