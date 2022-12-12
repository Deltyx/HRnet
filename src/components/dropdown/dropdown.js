import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown(props) {

    let listItems = [];
    if(props.list){
        listItems = props.list.map((item, index) => <MenuItem key={index} value={item.value}>{item.title}</MenuItem>)
    }


    return (
        <FormControl sx={{ m: 1, minWidth: 265, maxWidth:265, margin:"none" }}>
            <InputLabel>{props.dropdownTitle}</InputLabel>
            <Select
                value={props.value}
                onChange={props.onChange}
                autoWidth
                label={props.label}
            >
            {listItems && listItems}
            </Select>
        </FormControl>
    );
}