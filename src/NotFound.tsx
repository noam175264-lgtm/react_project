import { Box, Typography, Button, Container } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from "react-router-dom";
import React from "react";

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    textAlign: 'center',
                    gap: 3
                }}
            >
                <ErrorOutlineIcon
                    sx={{
                        fontSize: 80,
                        color: 'error.main'
                    }}
                />

                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '48px', sm: '64px' },
                        fontWeight: 700,
                        color: 'text.primary'
                    }}
                >
                    404
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        color: 'text.secondary',
                        mb: 1
                    }}
                >
                    Page Not Found
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        mb: 3,
                        fontSize: '16px'
                    }}
                >
                    We couldn't find the page you're looking for. It may have been moved or deleted.
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/')}
                    sx={{
                        textTransform: 'none',
                        px: 4,
                        py: 1.5,
                        fontWeight: 600
                    }}
                >
                    Back to Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;
