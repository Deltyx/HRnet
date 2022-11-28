import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export function DatePicker(props) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                label={props.label}
                inputFormat="MM/DD/YYYY"
                value={props.value}
                onChange={props.onChange}
                renderInput={(params) => <TextField {...params} />}
            />   
        </LocalizationProvider>
    )
}