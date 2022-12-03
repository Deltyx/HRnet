import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export function EmployeeDataTable(props) {
  return (
    <Box sx={{ height: 631, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}