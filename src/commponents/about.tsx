import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent,
  Avatar,
  Stack,
  Chip,
  Paper
} from '@mui/material';
import Grid from '@mui/material/Grid';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';

const About = () => {
  const features = [
    {
      icon: <AssignmentIcon sx={{ fontSize: 40 }} />,
      title: 'Ticket Management',
      description: 'Create, track, and manage support tickets efficiently with priority levels and status tracking.',
      color: 'primary.main'
    },
    {
      icon: <ChatBubbleOutlineIcon sx={{ fontSize: 40 }} />,
      title: 'Real-time Comments',
      description: 'Communicate seamlessly with customers and agents through threaded conversations.',
      color: 'success.main'
    },
    {
      icon: <AdminPanelSettingsIcon sx={{ fontSize: 40 }} />,
      title: 'Role-Based Access',
      description: 'Three-tier system: Customers create tickets, Agents resolve them, Admins oversee everything.',
      color: 'error.main'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Fast & Responsive',
      description: 'Built with React and Material-UI for lightning-fast performance and beautiful design.',
      color: 'warning.main'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure Authentication',
      description: 'JWT-based authentication ensures your data is protected and secure.',
      color: 'secondary.main'
    },
    {
      icon: <CloudSyncIcon sx={{ fontSize: 40 }} />,
      title: 'Cloud-Ready',
      description: 'Deployed and ready to scale with modern cloud infrastructure.',
      color: 'info.main'
    }
  ];

  const roles = [
    {
      icon: <PersonOutlineIcon />,
      title: 'Customer',
      description: 'Submit tickets, track progress, and communicate with support agents.',
      color: 'primary.main'
    },
    {
      icon: <SupportAgentIcon />,
      title: 'Agent',
      description: 'Respond to tickets, update status, and provide customer support.',
      color: 'warning.main'
    },
    {
      icon: <AdminPanelSettingsIcon />,
      title: 'Admin',
      description: 'Manage users, assign tickets, oversee operations, and configure system settings.',
      color: 'error.main'
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: 'primary.main',
              mx: 'auto',
              mb: 3
            }}
          >
            <SupportAgentIcon sx={{ fontSize: 50 }} />
          </Avatar>
          
          <Typography 
            variant="h2" 
            fontWeight={700} 
            gutterBottom
            sx={{ 
              background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            HelpDesk
          </Typography>
          
          <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
            Modern Support Ticket Management System
          </Typography>
          
          <Stack 
            direction="row" 
            spacing={1} 
            justifyContent="center"
            flexWrap="wrap"
            sx={{ gap: 1 }}
          >
            <Chip label="React" color="primary" />
            <Chip label="TypeScript" color="primary" />
            <Chip label="Material-UI" color="primary" />
            <Chip label="Redux" color="primary" />
            <Chip label="ASP.NET Core" color="secondary" />
          </Stack>
        </Box>

        <Paper elevation={0} sx={{ p: 4, mb: 6, borderRadius: 3, bgcolor: 'background.paper' }}>
          <Typography variant="h4" fontWeight={600} gutterBottom textAlign="center">
            What is HelpDesk?
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.8 }}>
            HelpDesk is a comprehensive support ticket management system designed to streamline 
            customer support operations. Built with modern web technologies, it provides a 
            seamless experience for customers seeking help, agents providing support, and 
            administrators managing the entire process. Our platform ensures efficient 
            communication, organized ticket tracking, and rapid issue resolution.
          </Typography>
        </Paper>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" fontWeight={600} gutterBottom textAlign="center" sx={{ mb: 4 }}>
            Key Features
          </Typography>
          
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: feature.color,
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        bgcolor: `${feature.color}15`,
                        color: feature.color,
                        mx: 'auto',
                        mb: 2
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {feature.title}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" fontWeight={600} gutterBottom textAlign="center" sx={{ mb: 4 }}>
            User Roles
          </Typography>
          
          <Grid container spacing={3}>
            {roles.map((role, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: 'divider',
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: role.color,
                      boxShadow: 4
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: role.color,
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    {role.icon}
                  </Avatar>
                  
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    {role.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary">
                    {role.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Paper 
          elevation={0}
          sx={{ 
            p: 4, 
            borderRadius: 3, 
            bgcolor: 'primary.main',
            color: 'white',
            textAlign: 'center',
            mt:'100px'
          }}
        >
          <Typography variant="h4" fontWeight={600} gutterBottom >
            Built with Modern Technology
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Our platform leverages cutting-edge technologies to deliver the best experience
          </Typography>
          
          <Grid container spacing={2} justifyContent="center">
            <Grid size="auto">
              <Chip 
                label="React 18" 
                sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }} 
              />
            </Grid>
            <Grid size="auto">
              <Chip 
                label="TypeScript" 
                sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }} 
              />
            </Grid>
            <Grid size="auto">
              <Chip 
                label="Material-UI v5" 
                sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }} 
              />
            </Grid>
            <Grid size="auto">
              <Chip 
                label="Redux Toolkit" 
                sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }} 
              />
            </Grid>
            <Grid size="auto">
              <Chip 
                label="React Router v6" 
                sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }} 
              />
            </Grid>
            <Grid size="auto">
              <Chip 
                label="ASP.NET Core" 
                sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }} 
              />
            </Grid>
            <Grid size="auto">
              <Chip 
                label="MySQL" 
                sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }} 
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;