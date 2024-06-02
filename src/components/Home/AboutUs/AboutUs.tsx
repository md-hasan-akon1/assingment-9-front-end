"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import donarAnimation from "@/lottie/donar.json";
import React from "react";
import Lottie from "lottie-react";
import Link from "next/link";
const AboutUs = () => {
  const customMarkerStyle = {
    color: "#C21525", // Color of the custom marker
    marginRight: "8px", // Adjust as needed
  };
  return (
    <Container
      sx={{ marginTop: "100px", marginBottom: "100px", position: "relative" }}
    >
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Stack
            sx={{
              backgroundColor: "#F9FAFB",
              padding: "20px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                boxShadow: "9px 9px 17px -7px rgba(255, 0, 0, 0.32)",
                transform: "scaleY(1.1)",
                transition: "transform 1s",
              },
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "50px" }}>
              Who We Are?
            </Typography>

            <Typography
              sx={{
                height: "3px",
                width: "100px",
                backgroundColor: "primary.main",
                marginBottom: "20px",
              }}
            ></Typography>

            <Typography style={{ marginBottom: "15px" }}>
              Blood Buddies is for public donation center with blood donation{" "}
              <b />
              members in the changing health care system.
            </Typography>
            <Stack spacing={100}>
              <ul style={{ listStyle: "none", paddingInlineStart: "1em" }}>
                <li style={{ marginBottom: "10px" }}>
                  <span style={customMarkerStyle}>•</span>
                  Specialist blood donors and clinical supervision.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <span style={customMarkerStyle}>•</span>
                  Increasing communication with our members.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <span style={customMarkerStyle}>•</span>
                  High quality assessment, diagnosis and treatment.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <span style={customMarkerStyle}>•</span>
                  Examine critically to ensure alignment.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <span style={customMarkerStyle}>•</span>
                  The extra care of a multi-disciplinary team.
                </li>
              </ul>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            height: 500,
            position: {
              md: "absolute",
            },
            top: {
              md: "-100px",
            },
            right: {
              md: "20px",
            },
          }}
        >
          <Stack>
            <Lottie animationData={donarAnimation} loop={true} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
