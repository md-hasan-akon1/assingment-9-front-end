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
import Link from "next/link";
import React from "react";
import assets from "@/assets";
import Image from "next/image";
const OurTeam = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          mb:"10px",
          pb:'30px',
          lg: {
            height: "calc(150vh)",
            width: "100vw",
          },
        }}
        style={{
          

          background: "url('https://i.ibb.co/TqLZLRL/team-feat-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "65px",
        }}
      >
        <Stack>
          <Typography
            sx={{
              color: "white",
              mt: "10%",
              fontSize: "22px",
              lineHeight: "32px",
              fontWeight: 400,
            }}
          >
            OUR VOLUNTEERS
          </Typography>
          <Typography
            sx={{
              height: "3px",
              width: "100px",
              margin: "auto",

              backgroundColor: "primary.main",
              marginBottom: "20px",
            }}
          ></Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "50px",
              lineHeight: "60px",
              fontWeight: 700,
            }}
          >
            The volunteers who give their time and <br /> talents help to
            fulfill our mission.
          </Typography>
        </Stack>

        {/* card */}
        <Container>
          <Grid container spacing={4}>
            <Grid item lg={4} mx="auto">
              <Card
                sx={{
                  maxWidth: "100%",
                  marginTop: "50px",
                  "&:hover": {
                    boxShadow: "9px 9px 17px -7px rgba(255, 0, 0, 0.32)",
                    transform: "scale(1.1)",
                    transition: "transform 2s, box-shadow 2s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: "350px" }}
                  image="https://i.ibb.co/wstT1sQ/team-9.webp"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "22px",
                      fontWeight: 700,
                    }}
                  >
                    ALEXANDER GARY
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    CO-FOUNDER
                  </Typography>
                </CardContent>

                <CardActions sx={{ backgroundColor: "#F8F9FA" }}>
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
            </Grid>
            <Grid item lg={4} mx="auto">
              {" "}
              <Card
                sx={{
                  maxWidth: "100%",
                  marginTop: "50px",
                  "&:hover": {
                    boxShadow: "9px 9px 17px -7px rgba(255, 0, 0, 0.32)",
                    transform: "scale(1.1)",
                    transition: "transform 2s, box-shadow 2s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: "350px" }}
                  image="https://i.ibb.co/MnkG73B/team-6.webp"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "22px",
                      fontWeight: 700,
                    }}
                  >
                    MELISSA MUNOZ
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    FOUNDER
                  </Typography>
                </CardContent>

                <CardActions sx={{ backgroundColor: "#F8F9FA" }}>
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
            </Grid>
            <Grid item lg={4} mx="auto">
              <Card
                sx={{
                  maxWidth: "100%",
                  marginTop: "50px",
                  "&:hover": {
                    boxShadow: "9px 9px 17px -7px rgba(255, 0, 0, 0.32)",
                    transform: "scale(1.1)",
                    transition: "transform 2s, box-shadow 2s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: "350px" }}
                  image="https://i.ibb.co/J289Fsc/team-7.webp"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "22px",
                      fontWeight: 700,
                    }}
                  >
                    JOHN ABRAHAM
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    MANAGER
                  </Typography>
                </CardContent>

                <CardActions sx={{ backgroundColor: "#F8F9FA" }}>
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OurTeam;
