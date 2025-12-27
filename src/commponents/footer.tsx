import { Link as RouterLink } from "react-router-dom";
import logo from "../img/logo.png";
import { Box, Container, Typography, Stack } from '@mui/material';
import MuiLink from "@mui/material/Link";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const FooterExpanded = () => {
    const { isLoggedIn } = useSelector((state: RootState) => state.auth);
    const { user } = useSelector((state: RootState) => state.auth);
    let route: string = ""
    { user?.role === "customer" ? route = "/dashboard_c" : user?.role === "agent" ? route = "/dashboard_ag" : route = "/dashboard_ad" }

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: 4,
                mt: '100px'
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={logo} alt="Logo" style={{ height: "120px" }} />
                    </Box>

                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        flexWrap="wrap"
                    >
                        <MuiLink
                            component={RouterLink}
                            to="/home"
                            underline="none"
                            fontSize={16}
                            color="inherit"
                            sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                        >
                            Home
                        </MuiLink>
                        <Typography>|</Typography>
                        <MuiLink
                            component={RouterLink}
                            to="/about"
                            underline="none"
                            fontSize={16}
                            color="inherit"
                            sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                        >
                            About
                        </MuiLink>
                        {isLoggedIn && (
                            <>
                                <Typography>|</Typography>
                                <MuiLink
                                    component={RouterLink}
                                    to={route}
                                    underline="none"
                                    fontSize={16}
                                    color="inherit"
                                    sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                                >
                                    Dashboard
                                </MuiLink>
                            </>
                        )}
                    </Stack>

                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        flexWrap="wrap"
                    >
                        <MuiLink
                            component={RouterLink}
                            to="/privacy"
                            underline="none"
                            fontSize={14}
                            color="inherit"
                            sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                        >
                            Privacy Policy
                        </MuiLink>
                        <Typography sx={{ fontSize: 14 }}>|</Typography>
                        <MuiLink
                            component={RouterLink}
                            to="/terms"
                            underline="none"
                            fontSize={14}
                            color="inherit"
                            sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                        >
                            Terms of Service
                        </MuiLink>
                        <Typography sx={{ fontSize: 14 }}>|</Typography>
                        <MuiLink
                            component={RouterLink}
                            to="/contact"
                            underline="none"
                            fontSize={14}
                            color="inherit"
                            sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                        >
                            Contact Us
                        </MuiLink>
                    </Stack>

                    <Typography
                        variant="body2"
                        align="center"
                        sx={{ opacity: 0.7, fontSize: 14 }}
                    >
                        © 2024 Your Company. All rights reserved.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}

export default FooterExpanded;