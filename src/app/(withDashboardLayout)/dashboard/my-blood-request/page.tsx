"use client"

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useMyBloodRequestQuery } from '@/redux/api/userApi';

const columns: GridColDef[] = [
  
  { field: 'name', headerName: 'Donor Name', width: 130 },

  {
    field: 'bloodType',
    headerName: 'Blood Group',
    width: 90,
  },
  {
    field: 'requestStatus',
    headerName: 'Status',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell:(params)=>(<Box>hasa</Box>)
  },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];
const MyBloodRequest = ()=> {
        const {data,isLoading}=useMyBloodRequestQuery({})
        
const rows=data?.map((item:any)=>{
        console.log(item)
return{
        name:item?.donor?.name,
        bloodType:item?.donor?.bloodType,
        requestStatus:item?.requestStatus

}
})
  return (
    <Box style={{ height: 400, width: '100%' }}>
    {isLoading?"Loading...":  <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />}
    </Box>
  );
}

export default MyBloodRequest