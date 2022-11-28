import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'firstName',
    headerName: 'First name',
    width: 140,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 140,
    editable: true,
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    type: 'date',
    width: 120,
    editable: true,
  },
  {
    field: 'departement',
    headerName: 'Department',
    width: 150,
    editable: true,
  },
  {
    field: 'birthDate',
    headerName: 'Birth Date',
    type: 'date',
    width: 120,
    editable: true,
  },
  {
    field: 'street',
    headerName: 'Street',
    width: 150,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 150,
    editable: true,
  },
  {
    field: 'state',
    headerName: 'State',
    width: 110,
    editable: true,
  },
  {
    field: 'zipCode',
    headerName: 'Zip Code',
    type: 'number',
    width: 130,
    editable: true,
  },
];

const rows = [
  {id:1, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:2, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:3, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:4, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:5, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:6, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:7, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:8, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:9, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:10, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:11, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:12, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:13, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:14, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
  {id:15, lastName: 'Snow', firstName: 'Jon', startDate: new Date(), departement:'Sales', birthDate: new Date(), street:"Lost", city:"In The", state:"Internet", zipCode:420 },
];

export function EmployeeDataTable() {
  return (
    <Box sx={{ height: 631, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}