import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';

const features = [
    {
        icon: <SpeedIcon sx={{ fontSize: 50, color: '#1976d2' }} />,
        title: 'Fast & Efficient',
        description: 'Handle tickets quickly with automated assignment'
    },
    {
        icon: <SupportAgentIcon sx={{ fontSize: 50, color: '#1976d2' }} />,
        title: 'Professional Support',
        description: 'Track every ticket with full history'
    },
    {
        icon: <SecurityIcon sx={{ fontSize: 50, color: '#1976d2' }} />,
        title: 'Secure',
        description: 'Your data is protected with encryption'
    }
];
const HomePage = () => {
    return <>
        <div style={{ padding: '20px' }}>
            <h1 style={{marginBottom:'100px'}}>HelpDesk</h1>
            <Grid container spacing={4}>
                {features.map((feature, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ height: '100%', textAlign: 'center' }}>
                            <CardContent sx={{ p: 4 }}>
                                <Box sx={{ mb: 2 }}>
                                    {feature.icon}
                                </Box>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                    {feature.title}
                                </Typography>
                                <Typography color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    </>
}
export default HomePage;