import { Alert, Box, Button, Divider, Paper, Typography } from "@mui/material";
import type React from "react";
import Input from "../inputs";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { LoginService } from "../../service/authService";
import { loginSuccess } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { showLoading, closeAlert, showSuccess as showAlertSuccess, showError } from "../../utils/sweetAlertConfig";
interface IFormInput {
  name: string
  email: string
  password: string
}
const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [massege, setMassege] = useState("");
  
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      password: ""
    },
  })


  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      showLoading('Logging in...', 'Please wait');
      const res = await LoginService(data.email, data.password)
      if (res.success) {
        const { token, user } = res.data;
        dispatch(loginSuccess({ token, user }))
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        console.log(massege);
        console.log("Login successful", user.role);

        closeAlert();
        showAlertSuccess('Login successful!', 'Welcome!');

        if (user.role == "customer")
          navigate('/dashboard_c');
        else {
          if (user.role == "agent")
            navigate('/dashboard_ag')
          else
            navigate('/dashboard_ad')
        }
      }
      else {
        closeAlert();
        showError("Login failed, please check your email or password", "Oops...");
        setMassege("Login failed, please check your email or password")
      }
    }
    catch (error) {
      closeAlert();
      showError("Login failed! Try again", "Oops...");
      console.log("Login failed! try again");
    }
  }

  const goToRegister = () => {
    navigate('/register');
  };
  return (<>
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.50',
        py: 4
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4, px: 2 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          ✨ Welcome to Our App
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
          We're happy to have you here. Everything you need to get started is right at your fingertips.
        </Typography>
      </Box>

      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 480,
          mx: 2,
          borderRadius: 4,
          overflow: 'hidden'
        }}
      >

        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 3,
            px: 4,
            textAlign: 'center'
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            👉 Let's Get Started
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.9 }}>
            Login to continue
          </Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

              <Input
                name="email"
                type="email"
                components={<EmailIcon color="action" />}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                control={control}
                errors={errors}
              />

              <Input
                name="password"
                type="password"
                components={<LockIcon color="action" />}
                pattern="^(?:[A-Za-z]{3,10}|\d{3,10})$"
                control={control}
                errors={errors}
              />
              {massege && (
                <Alert severity="error" sx={{ borderRadius: 2 }}>
                  {massege}
                </Alert>
              )}

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  mt: 1,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  boxShadow: 2
                }}
              >
                Login
              </Button>


              <Divider sx={{ my: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  OR
                </Typography>
              </Divider>

              <Typography variant="body2" color="text.secondary" align="center">
                Don't have an account yet?{' '}
                <Typography
                  component="span"
                  color="primary"
                  sx={{
                    cursor: 'pointer',
                    fontWeight: 600,
                    '&:hover': { textDecoration: 'underline' }
                  }}
                  onClick={goToRegister}
                >
                  Register here
                </Typography>
              </Typography>
            </Box>
          </Box>
        </form>
      </Paper>


    </Box>
  </>);
}
export default Login;