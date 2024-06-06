"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Image from "next/image";
import { useGetMeQuery } from "@/redux/api/userApi";
import { Button, Grid, Stack } from "@mui/material";
import Link from "next/link";

const ProfilePage = () => {
  const theme = useTheme();

  const { data, isSuccess } = useGetMeQuery({});

  //const { availability,phoneNumber,name,location,id,email,bloodType,userProfile:{age,bio,lastDonationDate}} = data;
  console.log(data);
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Box>
            <Image
              height={200}
              width={200}
              src={"https://i.ibb.co/wstT1sQ/team-9.webp"}
              alt=""
            ></Image>
            <Typography sx={{ textWrap:"nowrap"}} component="div" variant="h5">
              Name: {data?.name}
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            // sx={{display:"flex"}}
          >
            <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
              Bio{" "}
            </Typography>{" "}
            <Typography
              sx={{
                border: "rosybrown solid 1px",
                textAlign: "center",
                py: "4px",
                px: "4px",
                maxWidth: "300px",
                borderRadius: "10px",
                backgroundColor: "#F4F7FE",
              }}
            >
              {data?.userProfile?.bio || "this is default bio"}
            </Typography>
          </Typography>
        </CardContent>
      </Box>

      <Stack sx={{ marginTop: "20px", mx: "20px", width: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link href={`profile/edit/${data?.id}`}>
            <Button>Edit Profile</Button>
          </Link>
        </Box>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Typography
              sx={{
                py: "1px",
                px: "2px",
                marginTop: "20px",
                borderRadius: "10px",
                backgroundColor: "#F4F7FE",
               
              }}
              component="div"
              variant="h5"
            >
              PhoneNumber : {data?.phoneNumber}
            </Typography>
            <Typography
              sx={{
                py: "1px",
                px: "2px",
                marginTop: "20px",
                borderRadius: "10px",
                backgroundColor: "#F4F7FE",
              }}
              component="div"
              variant="h5"
            >
              Location : {data?.location}
            </Typography>

            <Typography
              sx={{
                py: "1px",
                px: "2px",
                marginTop: "20px",
                borderRadius: "10px",
                backgroundColor: "#F4F7FE",
              }}
              component="div"
              variant="h5"
            >
              Blood Group : {data?.bloodType}
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography
              sx={{
                py: "1px",
                px: "2px",
                marginTop: "20px",
                borderRadius: "10px",
                backgroundColor: "#F4F7FE",
              }}
              component="div"
              variant="h5"
            >
              Availability :{" "}
              {data?.availability ? "Available" : "Not Available"}
            </Typography>

            <Typography
              sx={{
                py: "1px",
                px: "2px",
                marginTop: "20px",
                borderRadius: "10px",
                backgroundColor: "#F4F7FE",
              }}
              component="div"
              variant="h5"
            >
              Last Donation Date: {data?.userProfile?.lastDonationDate}
            </Typography>
            <Typography
              sx={{
                py: "1px",
                px: "2px",
                marginTop: "20px",
                borderRadius: "10px",
                backgroundColor: "#F4F7FE",
              }}
              component="div"
              variant="h5"
            >
              Age : {data?.userProfile?.age}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          sx={{
            py: "1px",
            px: "2px",
            marginTop: "20px",
            borderRadius: "10px",
            backgroundColor: "#F4F7FE",
          }}
          component="div"
          variant="h5"
        >
          Email : {data?.email}
        </Typography>
      </Stack>
    </Card>
  );
};

export default ProfilePage;
