import { InputAdornment, TextField } from "@mui/material";
import type React from "react";
import { Controller } from "react-hook-form";

interface InputProps {
    name: string;
    type: string;
    components: React.ReactNode;
    pattern: string
    control: any;
    errors: any;
}

const Input: React.FC<InputProps> = ({ name, type, components, pattern, control, errors }) => {
    return <Controller
        name={name}
        control={control}
        rules={{
            required: `${name} is required`, pattern: {
                value: new RegExp(pattern),
                message: `invalid ${name}`
            }
        }}
        render={({ field }) => (
            <TextField
                {...field}
                label={name}
                id="outlined-basic"
                type={type}
                variant="outlined"
                fullWidth
                error={!!errors[name]}
                helperText={errors[name]?.message}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {components}
                        </InputAdornment>
                    ),
                }}
            />
        )}
    />;
}

export default Input;