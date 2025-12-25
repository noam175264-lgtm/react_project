import { useFetcher, useRevalidator } from "react-router-dom";
import { Button, Typography, Stack, Box, FormControl, InputLabel, Select, MenuItem, FormHelperText, ListItemIcon, ListItemText, CircularProgress } from "@mui/material";
import Input from "../../inputs";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useForm, Controller } from "react-hook-form";
import { showSuccess, showError } from "../../../utils/sweetAlertConfig";
import { useEffect } from "react";
import type { User } from "../../../types";
import Grid from '@mui/material/Grid';

interface AddUserProps {
    onClose?: () => void;
}


const AddUser = ({ onClose }: AddUserProps) => {
    const fetcher = useFetcher();
    const revalidator = useRevalidator();

    const { control, handleSubmit, formState: { errors }, reset } = useForm<User>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: "customer"
        },
    });

    useEffect(() => {

        if (fetcher.state === "idle" && fetcher.data) {
            if (fetcher.data.error) {
                if (onClose) onClose();

                setTimeout(() => {
                    showError(fetcher.data.error, 'Oops...');
                }, 100);
            } else {
                showSuccess('User created successfully!', 'Good job!');
                reset();
                revalidator.revalidate();
                if (onClose) onClose();
            }
        }
    }, [fetcher.state, fetcher.data]);

    const onSubmit = (data: User) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("role", data.role);

        console.log('📤 Submitting form');
        fetcher.submit(formData, { method: "post", action: "/addUser" });
    };

    const getRoleIcon = (role: string) => {
        switch (role) {
            case 'admin':
                return <AdminPanelSettingsIcon sx={{ color: 'error.main' }} />;
            case 'agent':
                return <SupportAgentIcon sx={{ color: 'warning.main' }} />;
            case 'customer':
                return <PersonOutlineIcon sx={{ color: 'primary.main' }} />;
            default:
                return <PersonOutlineIcon color="action" />;
        }
    };

    return (
        <Box sx={{ py: 2 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                        User Details
                    </Typography>

                    <Input
                        name="name"
                        type="string"
                        components={<PersonIcon color="action" />}
                        pattern="^[^<>\'`;()\/\\]+$"
                        control={control}
                        errors={errors}
                    />

                    <Input
                        name="email"
                        type="string"
                        components={<EmailIcon color="action" />}
                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        control={control}
                        errors={errors}
                    />

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Input
                                name="password"
                                type="password"
                                components={<LockIcon color="action" />}
                                pattern="^(?:[A-Za-z]{3,10}|\d{3,10})$"
                                control={control}
                                errors={errors}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="role"
                                control={control}
                                rules={{ required: "Role is required" }}
                                render={({ field }) => (
                                    <FormControl
                                        fullWidth
                                        error={!!errors.role}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2
                                            }
                                        }}
                                    >
                                        <InputLabel id="role-select-label">Role</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="role-select-label"
                                            label="Role"
                                            disabled={fetcher.state === "submitting"}
                                            renderValue={(value) => (
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    {getRoleIcon(value)}
                                                    <Typography sx={{ textTransform: 'capitalize' }}>
                                                        {value}
                                                    </Typography>
                                                </Box>
                                            )}
                                        >
                                            <MenuItem value="customer">
                                                <ListItemIcon>
                                                    <PersonOutlineIcon sx={{ color: 'primary.main' }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Customer" />
                                            </MenuItem>
                                            <MenuItem value="agent">
                                                <ListItemIcon>
                                                    <SupportAgentIcon sx={{ color: 'warning.main' }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Agent" />
                                            </MenuItem>
                                            <MenuItem value="admin">
                                                <ListItemIcon>
                                                    <AdminPanelSettingsIcon sx={{ color: 'error.main' }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Admin" />
                                            </MenuItem>
                                        </Select>
                                        {errors.role && (
                                            <FormHelperText>{errors.role.message}</FormHelperText>
                                        )}
                                    </FormControl>
                                )}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        fullWidth
                        size="large"
                        disabled={fetcher.state === "submitting"}
                        startIcon={fetcher.state === "submitting" ? <CircularProgress size={20} color="inherit" /> : null}
                        sx={{
                            textTransform: 'none',
                            borderRadius: 2,
                            py: 1.5,
                            boxShadow: 2,
                            fontWeight: 600,
                            mt: 2
                        }}
                    >
                        {fetcher.state === "submitting" ? 'Creating...' : 'Create New User'}
                    </Button>
                </Stack>
            </form>
        </Box>
    )
}

export default AddUser;