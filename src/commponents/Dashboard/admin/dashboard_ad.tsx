import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { 
    Accordion, 
    AccordionDetails, 
    AccordionSummary, 
    Avatar, 
    Box, 
    Stack, 
    Typography,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Card,
    CardContent,
    Fab
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleIcon from '@mui/icons-material/People';
import GetTicketsByID from "./getTickesById";
import AddStatus from "./addStatus";
import AddPriority from "./addPriority";
import AddUser from "./addUser";
import ShowUsers from "./showUsers";

export interface User {
    id: number
    name: string
    email: string
    role: string
    created_at: string
    password: string
}

const DashboardAd = () => {
    const users: User[] = useRouteLoaderData("dashboardChild") as User[];
    const [openStatus, setOpenStatus] = useState(false);
    const [openPriority, setOpenPriority] = useState(false);
    const [openUser, setOpenUser] = useState(false);
    const [openAllUsers, setOpenAllUsers] = useState(false);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
                System Management
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                <Fab
                    variant="extended"
                    color="primary"
                    onClick={() => setOpenStatus(true)}
                    sx={{ textTransform: 'none', px: 3 }}
                >
                    <AssignmentTurnedInIcon sx={{ mr: 1 }} />
                    Add Status
                </Fab>

                <Fab
                    variant="extended"
                    color="secondary"
                    onClick={() => setOpenPriority(true)}
                    sx={{ textTransform: 'none', px: 3 }}
                >
                    <PriorityHighIcon sx={{ mr: 1 }} />
                    Add Priority
                </Fab>

                <Fab
                    variant="extended"
                    color="success"
                    onClick={() => setOpenUser(true)}
                    sx={{ textTransform: 'none', px: 3 }}
                >
                    <PersonAddIcon sx={{ mr: 1 }} />
                    Add User
                </Fab>

                <Fab
                    variant="extended"
                    color="info"
                    onClick={() => setOpenAllUsers(true)}
                    sx={{ textTransform: 'none', px: 3 }}
                >
                    <PeopleIcon sx={{ mr: 1 }} />
                    All Users
                </Fab>
            </Stack>

            <Dialog 
                open={openStatus} 
                onClose={() => setOpenStatus(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="h6" fontWeight={600}>
                            Manage Statuses
                        </Typography>
                        <IconButton onClick={() => setOpenStatus(false)} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <AddStatus onClose={() => setOpenStatus(false)} />
                </DialogContent>
            </Dialog>

            <Dialog 
                open={openPriority} 
                onClose={() => setOpenPriority(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="h6" fontWeight={600}>
                            Manage Priorities
                        </Typography>
                        <IconButton onClick={() => setOpenPriority(false)} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <AddPriority onClose={() => setOpenPriority(false)} />
                </DialogContent>
            </Dialog>

            <Dialog 
                open={openUser} 
                onClose={() => setOpenUser(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="h6" fontWeight={600}>
                            Add New User
                        </Typography>
                        <IconButton onClick={() => setOpenUser(false)} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <AddUser onClose={() => setOpenUser(false)} />
                </DialogContent>
            </Dialog>

            <Dialog 
                open={openAllUsers} 
                onClose={() => setOpenAllUsers(false)}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="h6" fontWeight={600}>
                            All Users ({users.length})
                        </Typography>
                        <IconButton onClick={() => setOpenAllUsers(false)} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <ShowUsers users={users} />
                </DialogContent>
            </Dialog>

            <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: 4 }}>
                Customers
            </Typography>

            {users
                .filter((user: User) => user.role === "customer")
                .map((user: User) => (
                    <Accordion
                        key={user.id}
                        variant="outlined"
                        sx={{
                            mb: 1.5,
                            '&:before': { display: 'none' },
                            borderRadius: 1
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Avatar sx={{ width: 32, height: 32, fontSize: '0.875rem' }}>
                                    {user.name?.charAt(0).toUpperCase()}
                                </Avatar>
                                <Box>
                                    <Typography variant="body1" fontWeight={600}>
                                        {user.name}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {user.email}
                                    </Typography>
                                </Box>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <GetTicketsByID userId={user.id} users={users} />
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>
    )
}
export default DashboardAd;