import { Box, Card, CardContent, Stack, Typography, Avatar, Chip } from "@mui/material";
import type { User } from "./dashboard_ad";

interface ShowUsersprop {
    users: User[]
}

const ShowUsers = (params: ShowUsersprop) => {
    return (
        <Box sx={{ py: 2 }}>
            <Stack spacing={2}>
                {params.users.map((user: User) => (
                    <Card 
                        key={user.id} 
                        variant="outlined" 
                        sx={{ 
                            borderRadius: 2,
                            transition: 'all 0.2s',
                            '&:hover': {
                                boxShadow: 3,
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar 
                                    sx={{ 
                                        width: 48, 
                                        height: 48,
                                        bgcolor: user.role === 'admin' ? 'error.main' : 
                                                user.role === 'agent' ? 'warning.main' : 
                                                'primary.main',
                                        fontSize: '1.25rem'
                                    }}
                                >
                                    {user.name?.charAt(0).toUpperCase()}
                                </Avatar>
                                
                                <Box sx={{ flexGrow: 1 }}>
                                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                                        <Typography variant="h6" fontWeight={600}>
                                            {user.name}
                                        </Typography>
                                        <Chip 
                                            label={user.role} 
                                            size="small"
                                            color={
                                                user.role === 'admin' ? 'error' : 
                                                user.role === 'agent' ? 'warning' : 
                                                'primary'
                                            }
                                            sx={{ textTransform: 'capitalize' }}
                                        />
                                    </Stack>
                                    
                                    <Typography variant="body2" color="text.secondary">
                                        {user.email}
                                    </Typography>
                                    
                                    <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                                        Created: {new Date(user.created_at).toLocaleDateString()}
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    )
}

export default ShowUsers;