import MuiLink from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const ShowTicketsBt = () => {

    return (
        <div>
            <MuiLink 
                component={RouterLink} 
                to="/tickets" 
                underline="none"
                sx={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 26,
                    textTransform: 'capitalize',
                    borderRadius: 2,
                    px: 6,
                    py: 3,
                    '&:hover': {
                        background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 16px rgba(102, 126, 234, 0.4)'
                    },
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                }}
            >
                <ConfirmationNumberIcon sx={{ fontSize: 32 }} />
                Tickets
            </MuiLink>

           
        </div>
    )
}
export default ShowTicketsBt;