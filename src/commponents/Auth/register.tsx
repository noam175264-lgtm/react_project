
import { useForm, type SubmitHandler } from "react-hook-form"
import React, { useState } from 'react';
import {
  Button,
  Box,
  Typography,
  Paper,
  Divider,
  Alert
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Input from "../inputs";
import {  RegisterService } from "../../service/authService";
import { useNavigate } from "react-router-dom";
import { showLoading, closeAlert, showSuccess as showAlertSuccess, showError } from "../../utils/sweetAlertConfig";
import type { RegisterFormInput } from "../../types";
const Register: React.FC = () => {
  const navigate = useNavigate();
  const [massege, setMassege] = useState("");

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormInput>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
  })

  const onSubmit: SubmitHandler<RegisterFormInput> = async (data) => {
    try {
      showLoading('Creating account...', 'Please wait');
      const response = await RegisterService(data.name, data.email, data.password);

      if (response) {
        closeAlert();
        showError(response, "Oops...");
        setMassege(response);
      } else {
        closeAlert();
        showAlertSuccess('Account created successfully!', 'Welcome!');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      closeAlert();
      showError("An unexpected error occurred", "Oops...");
      console.error("Registration failed");
      setMassege("An unexpected error occurred");
    }
  }

  const goToLogin = () => {
    navigate('/login');
  }

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
          🎉 Join Us Today
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
          Create your account and start your journey with us
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
            Create Account
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.9 }}>
            Fill in your details to get started
          </Typography>
        </Box>


        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Input
                name="name"
                type="string"
                components={<PersonIcon color="action" />}
                control={control}
                errors={errors}
                pattern="^[^<>\'`;()\/\\]+$"
              />

              <Input
                name="email"
                type="email"
                components={<EmailIcon color="action" />}
                control={control}
                errors={errors}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              />

              <Input
                name="password"
                type="password"
                components={<LockIcon color="action" />}
                control={control}
                errors={errors}
                pattern="^(?:[A-Za-z]{3,10}|\d{3,10})$"

              />


              {massege?.trim() && (
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
                Create Account
              </Button>

              <Divider sx={{ my: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  OR
                </Typography>
              </Divider>

              <Typography variant="body2" color="text.secondary" align="center">
                Already have an account?{' '}
                <Typography
                  component="span"
                  color="primary"
                  sx={{
                    cursor: 'pointer',
                    fontWeight: 600,
                    '&:hover': { textDecoration: 'underline' }
                  }}
                  onClick={goToLogin}
                >
                  Login here
                </Typography>
              </Typography>
            </Box>
          </Box>
        </form>
      </Paper>


    </Box>
  </>);
}
export default Register;
