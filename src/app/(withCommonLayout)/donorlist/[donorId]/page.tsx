"use client";
import BloodDonorCard from "@/components/Sheared/BloodDonorCard/BloodDonorCard";
import { styled } from '@mui/material/styles';
import { useGetDonorDetailQuery } from "@/redux/api/userApi";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
type TParams = {
  params: {
    donorId: string;
  };
};

const StyledBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
  padding: theme.spacing(8, 0),
}));
const DonorDetail = ({ params }: TParams) => {
  const id = params?.donorId;
  const { data } = useGetDonorDetailQuery(id);
  console.log(data);
  return (
    <StyledBackground>
    <Container>
      <Typography variant="h4" component="h1" gutterBottom align="center" color="white">
        Blood Donor
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          <BloodDonorCard
            name={data?.name}
            photo={data?.photo}
            bloodType={data?.bloodType}
            location={data?.location}
            isAvailable={data?.isAvailable}
          />
        </Grid>
      </Grid>
    </Container>
  </StyledBackground>
  );
};

export default DonorDetail;
