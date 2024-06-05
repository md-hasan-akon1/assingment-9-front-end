"use client";

import { styled } from "@mui/material/styles";
import { useGetDonorDetailQuery } from "@/redux/api/userApi";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
type TParams = {
  params: {
    donorId: string;
  };
};

const DonorDetail = ({ params }: TParams) => {
  const id = params?.donorId;
  const { data } = useGetDonorDetailQuery(id);
  console.log(data);
  return (
    <Container sx={{ mt: "50px" }}>
      <Box
        sx={{
          height: "calc(100vh - 80px)",
          backgroundColor: "#FCE0DF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            mx: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: "700px",

              "&:hover": {
                boxShadow: "9px 9px 17px -7px rgba(255, 0, 0, 0.32)",
                transition: "transform 2s, box-shadow 2s",
              },
            }}
          >
            <CardMedia
            
              sx={{ height: "200px", width: "300px",mx:"auto", mt:"10px" }}
              image="https://i.ibb.co/1mxj1db/rokto-avatar-150x150.png"
              title={data?.name}
            />
            <CardContent>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                Name : {data?.name}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Blood Group : {data?.bloodType}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Availability :{" "}
                {data?.availability ? "Available" : "Not Available"}
              </Typography>
              <Link href={`/request-donor/${data?.id}`}> <Button> Request donor</Button></Link>
            </CardContent>

            <CardActions sx={{ backgroundColor: "#F8F9FA" }}>
              Phone : {data?.phoneNumber?data?.phoneNumber:"01679090922"}
              <Stack
                direction="row"
                gap={2}
                justifyContent="center"
                mx="auto"
                py={3}
              >
                <Image
                  src="https://i.ibb.co/nC3Dwkx/images.png"
                  width={30}
                  height={30}
                  alt="facebook"
                />
                <Image
                  src="https://i.ibb.co/cYjJV0Q/e672e08ab815fbdd9d301c1a1afbfe7a.png"
                  width={30}
                  height={30}
                  alt="linkedin"
                />
                <Image
                  src="https://i.ibb.co/YPmvgqL/2-20811-instagram-logo-red-vector-clipart-png-download-cute.png"
                  width={30}
                  height={30}
                  alt="instagram"
                />
                <Image
                  src="https://i.ibb.co/F5mWrHS/images-1.png"
                  width={30}
                  height={30}
                  alt="twitter"
                />
              </Stack>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default DonorDetail;
