"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useMyBloodRequestQuery } from "@/redux/api/userApi";

const columns: GridColDef[] = [
  { field:"id", headerName: "Serial"},

  { field: "name", headerName: "Donor Name", width: 200 },


  {
    field: "bloodType",
    headerName: "Blood Group",
    width: 200,
  },
  {
    field: "requestStatus",
    headerName: "Status",
    width: 200,
  },
  {

    field: "phoneNumber",
    headerName: "Contact Number",
    sortable: false,
    width: 200,
    renderCell: (params) => {
      console.log(params);
      return params?.row?.requestStatus=="APPROVED"?<Box>{params?.row?.phoneNumber}</Box>:<Box>{"Request Not APPROVE"}</Box>
    },
  },
];

const MyBloodRequest = () => {
  const { data, isLoading } = useMyBloodRequestQuery({});

  const rows = data?.map((item: any,index:number) => {
    console.log(item);
    return {
      id: index+1,
      name: item?.donor?.name,
      bloodType: item?.donor?.bloodType,
      requestStatus: item?.requestStatus,
      phoneNumber: item?.donor?.phoneNumber,
    };
  });
  return (
    <Box style={{ height: 400, width: "100%" }}>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      )}
    </Box>
  );
};

export default MyBloodRequest;
