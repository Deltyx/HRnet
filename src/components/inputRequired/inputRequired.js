import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export function InputRequired(props) {

    return (
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">{props.label}</InputLabel>
            <Input
                required
                type={props.type || ''}
                value={props.value}
                onChange={props.onChange}
            />
        </FormControl>
    )
}