import { Link as RouterLink } from "react-router-dom";
import logo from "../img/logo.png";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MuiLink from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { logout } from "../store/authSlice";




const Header = () => {
    const { isLoggedIn} = useSelector((state: RootState) => state.auth);
    const { user} = useSelector((state: RootState) => state.auth);
    let route:string=""
    {user?.role==="customer"? route= "/dashboard_c" :user?.role==="agent"? route= "/dashboard_ag":route="/dashboard_ad"}
    const dispatch = useDispatch();
    return (
        <header>
            <AppBar position="static" >
                <Toolbar sx={{ margin: '0 auto' }} >
                    <img src={logo} alt="Logo" style={{ height: "200px" }} />
                    <Typography variant="h6" sx={{ flexGrow: 1 }} >
                    </Typography>
                    <MuiLink component={RouterLink} to="/about" underline="none"  fontSize={18} color="inherit"  sx={{ mr: 2, mx: 2 }}  >
                        About
                    </MuiLink>
                    |
                    <MuiLink component={RouterLink} to="/home" underline="none" fontSize={18} color="inherit" sx={{ mr: 2, mx: 2 }}>
                        home
                    </MuiLink>
                    |
                    {isLoggedIn ? (
                        <MuiLink component={RouterLink} to={route} underline="none" fontSize={18} color="inherit" sx={{ mx: 2, mr: 2 }}>
                            Dashboard
                        </MuiLink>
                    ) : null}
                    
                    {isLoggedIn ? (      
                        <MuiLink component={RouterLink} to="/login" underline="none" fontSize={18} color="inherit" sx={{ mx: 2, mr: 2 }} onClick={()=>dispatch(logout())}>
                           | logout
                        </MuiLink>
                    ) : (
                        <MuiLink component={RouterLink} to="/login" underline="none" fontSize={18} color="inherit" sx={{ mx: 2, mr: 2 }}>
                            Login / Register
                        </MuiLink>
                        
                    )}
                </Toolbar>
            </AppBar>

        </header>
    );
}
export default Header;