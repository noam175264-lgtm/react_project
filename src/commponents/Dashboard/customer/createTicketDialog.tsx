import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
  IconButton
} from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useForm, Controller } from 'react-hook-form';
import { useFetcher } from 'react-router-dom';
import { showLoading, closeAlert, showSuccess as showAlertSuccess } from '../../../utils/sweetAlertConfig';

interface IFormInput {
  subject: string;
  description: string;
}

const CreateTicketDialog: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fetcher = useFetcher();
  
  const { control, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    defaultValues: {
      subject: '',
      description: ''
    }
  });

  const onSubmit = (data: IFormInput) => {
    setOpen(false);
    showLoading('Creating ticket...', 'Please wait');
    const formData = new FormData();
    formData.append("subject", data.subject);
    formData.append("description", data.description);
    fetcher.submit(formData, { method: "post" });
    reset();
    closeAlert();
    showAlertSuccess('Ticket created successfully!', 'Good job!');
    setShowSuccess(true);
  };

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  return (
    <>
      <Button 
        variant="contained" 
        onClick={() => setOpen(true)} 
        startIcon={<AddIcon />}
        sx={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontWeight: 700,
          fontSize: 18,
          textTransform: 'capitalize',
          borderRadius: 2,
          px: 4,
          py: 2,
          '&:hover': {
            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px rgba(102, 126, 234, 0.4)'
          },
          transition: 'all 0.3s ease'
        }}
      >
        New Ticket
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
          }
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  bgcolor: 'primary.main',
                  borderRadius: 2,
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ConfirmationNumberIcon sx={{ fontSize: 24, color: 'white' }} />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  Create New Ticket
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  We'll get back to you soon
                </Typography>
              </Box>
            </Box>
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent sx={{ pt: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Controller
                name="subject"
                control={control}
                rules={{
                  required: "Subject is required",
                  minLength: {
                    value: 3,
                    message: "Subject must be at least 3 characters"
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Subject"
                    placeholder="What's this about?"
                    fullWidth
                    variant="outlined"
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2
                      }
                    }}
                  />
                )}
              />

              <Controller
                name="description"
                control={control}
                rules={{
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters"
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Description"
                    placeholder="Tell us more about the issue..."
                    fullWidth
                    multiline
                    rows={5}
                    variant="outlined"
                    error={!!errors.description}
                    helperText={errors.description?.message}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2
                      }
                    }}
                  />
                )}
              />
            </Box>
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 3, pt: 2, gap: 1.5 }}>
            <Button
              onClick={handleClose}
              variant="text"
              sx={{ 
                textTransform: 'none',
                borderRadius: 2,
                px: 3
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                textTransform: 'none',
                borderRadius: 2,
                px: 4,
                boxShadow: 2
              }}
            >
              Create Ticket
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Success Notification */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          variant="filled"
          icon={<CheckCircleIcon fontSize="large" />}
          sx={{
            borderRadius: 3,
            minWidth: 300,
            boxShadow: 3
          }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Ticket Created Successfully!
          </Typography>
          <Typography variant="body2">
            We'll review your ticket and get back to you soon
          </Typography>
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreateTicketDialog;