"use client";

import BCDatePicker from "@/components/form/BCDatePicker";
import BCForm from "@/components/form/BCForm";
import BCInput from "@/components/form/BCInput";
import {
  useCreateDonarRequestMutation,
  useGetMeQuery,
} from "@/redux/api/userApi";
import { dateFormatter } from "@/utils/dateFormetter";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
type TParams = {
  params: {
    donorId: string;
  };
};

const DonorRequestPage = ({ params }: TParams) => {
  const router = useRouter();
  const id = params?.donorId;
  const { data, isSuccess } = useGetMeQuery({});

  const defaultValues = {
    hospitalAddress: "",
    hospitalName: "",
    phoneNumber: "",
    reason: "",
  };
  if (data) {
    defaultValues.phoneNumber = data?.phoneNumber;
  }

  const [createDonarRequest] = useCreateDonarRequestMutation();
  const handleSubmit = async (values: FieldValues) => {
    values.dateOfDonation = dateFormatter(values.dateOfDonation);
    values.donorId = id;
    const res = await createDonarRequest(values).unwrap();
    if (res.id) {
      toast.success("Request Send Successfully");
      router.push("/");
    }
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#FCE0DF",
          py: "30px",
          mx: "auto",
          mb: "15px",
          mt: "100px",
        }}
      >
        <Container>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Request for Donor
          </Typography>
          {data ? (
            <BCForm defaultValues={defaultValues} onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                  <BCInput
                    name="phoneNumber"
                    type="text"
                    label="Phone Number"
                    sx={{ mb: 2, backgroundColor: "white" }}
                    fullWidth={true}
                  ></BCInput>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <BCInput
                    name="hospitalName"
                    label="Hospital Name"
                    type="text"
                    sx={{ mb: 2, backgroundColor: "white" }}
                    fullWidth={true}
                  ></BCInput>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  {" "}
                  <BCInput
                    name="hospitalAddress"
                    label="Hospital Address "
                    fullWidth={true}
                    sx={{ mb: 2, backgroundColor: "white" }}
                  ></BCInput>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  {" "}
                  <BCInput
                    name="reason"
                    label="Reason "
                    fullWidth={true}
                    sx={{ mb: 2, backgroundColor: "white" }}
                  ></BCInput>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  {" "}
                  <BCDatePicker
                    name="dateOfDonation"
                    label="date Of Donation"
                    fullWidth={true}
                    sx={{ mb: 2, backgroundColor: "white" }}
                  ></BCDatePicker>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Button type="submit" sx={{ width: "100%" }}>
                    Submit Request
                  </Button>
                </Grid>
              </Grid>
            </BCForm>
          ) : (
            "Loading"
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default DonorRequestPage;
