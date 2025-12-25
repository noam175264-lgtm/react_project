import { useDispatch, useSelector } from "react-redux";
import { useFetcher } from "react-router-dom";
import { setStatuses } from "../../../store/dataSlice";
import type { RootState } from "../../../store/store";
import { Button, Typography, Stack, Chip, Box, Divider, Paper } from "@mui/material";
import Input from "../../inputs";
import SourceIcon from '@mui/icons-material/Source';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { showLoading, closeAlert, showSuccess, showError } from "../../../utils/sweetAlertConfig";
import type { Status } from "../../../types";

interface AddStatusProps {
  onClose?: () => void;
}

const AddStatus = ({ onClose }: AddStatusProps) => {
    const statuses = useSelector((state: RootState) => state.data.statuses)
    const fetcher = useFetcher()
    const dispatch = useDispatch()

    const { control, handleSubmit, formState: { errors }, reset } = useForm<Status>({
        defaultValues: {
            id: 0,
            name: ""
        },
    })
    
    const onSubmit = async (data: Status) => {
        try {
            showLoading('Adding status...', 'Please wait');
            const formData = new FormData()
            formData.append("name", data.name)

            const response = await fetcher.submit(formData, {
                method: "post",
                action: "/addStatus"
            });
        } catch (error) {
            closeAlert();
            showError('Failed to add status. Please try again.', 'Oops...');
        }
    }
    useEffect(() => {
        if (fetcher.state === "idle" && fetcher.data) {
            closeAlert();
            if (fetcher.data?.id) {  
                dispatch(setStatuses([...statuses, fetcher.data]));
                showSuccess('Status added successfully!', 'Good job!');
            } else if (fetcher.data?.error) {
                showError(fetcher.data.error, 'Oops...');
            }
            reset();
            if (onClose) onClose();
        }
    }, [fetcher.state, fetcher.data]);
    return (
        <Box sx={{ py: 2 }}>
            <Paper elevation={0} sx={{ p: 2, mb: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Existing Statuses
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {statuses.map((p: Status, index) => (
                        <Chip
                            key={index}
                            label={p.name}
                            color="primary"
                            variant="outlined"
                            size="small"
                        />
                    ))}
                </Stack>
            </Paper>

            <Divider sx={{ mb: 3 }} />

            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    <Typography variant="subtitle1" fontWeight={600}>
                        Add New Status
                    </Typography>

                    <Input
                        name="name"
                        type="string"
                        components={<SourceIcon color="action" />}
                        pattern="^(?!\s*$).+"
                        control={control}
                        errors={errors}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{
                            textTransform: 'none',
                            borderRadius: 2,
                            py: 1.5,
                            boxShadow: 2,
                            fontWeight: 600
                        }}
                    >
                        Add Status
                    </Button>
                </Stack>
            </form>
        </Box>
    )
}

export default AddStatus;