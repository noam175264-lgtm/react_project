import { Box, FormControl, InputLabel, MenuItem, Select, Chip, type SelectChangeEvent } from "@mui/material";
import { getColorByName } from "../../utils/colorHelper";

interface Selestorprop {
    name: string,
    data: any[],
    func: (event: SelectChangeEvent) => void,
    currentValue?: string
}

const Selector: React.FC<Selestorprop> = (params: Selestorprop) => {
    return (
        <Box>
            <FormControl fullWidth size="medium">
                <InputLabel id={`${params.name}-label`}>
                    {params.name.charAt(0).toUpperCase() + params.name.slice(1)}
                </InputLabel>
                <Select
                    labelId={`${params.name}-label`}
                    label={params.name.charAt(0).toUpperCase() + params.name.slice(1)}
                    defaultValue=""
                    onChange={params.func}
                    renderValue={(selected) => {
                        const selectedItem = params.data.find(item => item.id === selected);
                        if (!selectedItem) return params.name;
                        
                        return (
                            <Chip 
                                label={selectedItem.name} 
                                color={getColorByName(selectedItem.name)}
                                size="small"
                            />
                        );
                    }}
                >
                    {params.data.map((dat: any) => 
                        <MenuItem key={dat.id} value={dat.id}>
                            <Chip 
                                label={dat.name} 
                                color={getColorByName(dat.name)}
                                size="small"
                            />
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    )
}
export default Selector;