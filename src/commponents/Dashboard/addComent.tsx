import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFetcher } from "react-router-dom";
import Input from "../inputs";
import SourceIcon from '@mui/icons-material/Source';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { showLoading, closeAlert, showSuccess as showAlertSuccess } from "../../utils/sweetAlertConfig";
import type { Comment } from "../../types";
const AddComment = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const fetcher = useFetcher();
    const { control, handleSubmit, formState: { errors } } = useForm<Comment>({
        defaultValues: {
            content: "",
        },
    })
    const onSubmit = (data: Comment) => {
        setOpen(false);
        showLoading('Adding comment...', 'Please wait');
        const formData = new FormData();
        formData.append("content", data.content);
        fetcher.submit(formData, { method: "post" });
        closeAlert();
        showAlertSuccess('Comment added successfully!', 'Good job!');
        setShowSuccess(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                onClick={() => setOpen(true)}
                startIcon={<AddIcon />}
                sx={{
                    textTransform: 'none',
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    minWidth: 180
                }}
            >
                New Comment
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1 }}>
                                <Box
                                    sx={{
                                        bgcolor: 'primary.main',
                                        borderRadius: 2,
                                        p: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: 48,
                                        minHeight: 48
                                    }}
                                >
                                    <CommentIcon sx={{ fontSize: 24, color: 'white' }} />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="h6" fontWeight={600} sx={{ lineHeight: 1.2 }}>
                                        Create Comment
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.2 }}>
                                        Share your thoughts
                                    </Typography>
                                </Box>
                            </Box>
                            <IconButton onClick={handleClose} size="small">
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </DialogTitle>
                    <DialogContent sx={{ pt: 5, pb: 2, px: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 ,mt:1}}>
                            <Input
                                name="content"
                                type="string"
                                components={<SourceIcon color="action" />}
                                pattern="^[A-Za-z0-9\s!@#$%^&*()\-_=+\[\]{};:',.<>/?\\|`~]+$"
                                control={control}
                                errors={errors}
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
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

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
                        Comment Added Successfully!
                    </Typography>
                    <Typography variant="body2">
                        Your comment has been posted
                    </Typography>
                </Alert>
            </Snackbar>
        </>

    )
}
export default AddComment;