import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useState } from 'react';

export function EmployeeDataTable(props) {

  const [pageSize, setPageSize] = useState(5)

  return (
    <Box sx={{ height: 631, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{
          Toolbar: GridToolbarQuickFilter
        }}
      />
    </Box>
  );
}