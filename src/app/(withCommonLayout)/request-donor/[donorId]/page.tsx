"use client";

import { bloodType } from "@/components/constant";
import BCDatePicker from "@/components/form/BCDatePicker";
import BCForm from "@/components/form/BCForm";
import BCInput from "@/components/form/BCInput";
import BCSelectField from "@/components/form/BCSelectField";
import {
  useCreateDonarRequestMutation,
  useGetDonorDetailQuery,
  useGetMeQuery,
} from "@/redux/api/userApi";
import { dateFormatter } from "@/utils/dateFormetter";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
type TParams = {
  params: {
    donorId: string;
  };
};

const DonorRequestPage = ({ params }: TParams) => {
  const [terms, setTerms] = useState(false);
  const router = useRouter();
  const id = params?.donorId;
  const { data: Donor } = useGetDonorDetailQuery(id);
  const { data, isSuccess } = useGetMeQuery({});

  const requestValidationSchema = z.object({
    hospitalAddress: z
      .string()
      .min(1, { message: " hospitalAddress is required" }),
    hospitalName: z
      .string()
      .min(1, { message: " hospitalAddress is required" }),
    phoneNumber: z.string().min(1, { message: " hospitalAddress is required" }),
    reason: z.string().min(1, { message: " hospitalAddress is required" }),
    bloodType: z.string().min(1, { message: " hospitalAddress is required" }),
  });
  const defaultValues = {
    hospitalAddress: "",
    hospitalName: "",
    phoneNumber: "",
    reason: "",
    bloodType: Donor?.bloodType || "",
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
            <BCForm   onSubmit={handleSubmit} defaultValues={defaultValues} resolver={zodResolver(requestValidationSchema)}>
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
                <Grid item xs={12} sm={12} md={6}>
                  {" "}
                  <BCDatePicker
                    name="dateOfDonation"
                    label="date Of Donation"
                    fullWidth={true}
                    sx={{ mb: 2, backgroundColor: "white" }}
                  ></BCDatePicker>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  {" "}
                  <BCSelectField
                    items={bloodType}
                    name="bloodType"
                    label="Need blood Group"
                    fullWidth={true}
                    sx={{ mb: 2, backgroundColor: "white" }}
                  ></BCSelectField>
                  <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
                      {" "}
                      <input
                        onClick={() => setTerms(!terms)}
                        type="checkbox"
                      />{" "}
                      accept{" "}
                      <Link href="/">
                        <span style={{ color: "green" }}>
                          terms and conditions
                        </span>
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Button
                    disabled={!terms}
                    type="submit"
                    sx={{ width: "100%" }}
                  >
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
