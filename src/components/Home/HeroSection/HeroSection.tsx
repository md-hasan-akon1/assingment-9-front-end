"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { url } from "inspector";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
const HeroSection = () => {
  let progressCircle = useRef(null);
  let progressContent = useRef(null);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            sx={{ textAlign: "right" }}
            style={{
              width: "100vw",
              height: "calc(100vh - 60px)",
              background:
                "linear-gradient( to right, rgba(51, 51, 51, 1), rgba(51, 51, 51, 0)), url('https://i.ibb.co/JsckY4P/blood-2-20210413113426.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: "65px",
            }}
          >
            <Box sx={{ color: "white", display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  height: "100%",
                  mt: "20%",
                  textAlign: "left",
                  marginLeft: "10%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "32px",
                    lineHeight: "48px",
                    color: "white",
                  }}
                >
                  Donate blood,save life !
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "60px",
                    lineHeight: "66px",
                    color: "white",
                  }}
                >
                  DONATE BLOOD <br /> AND INSPIRES OTHERS.
                </Typography>
                <Link href="/">
                  <Button
                    sx={{
                      fontWeight: 300,
                      marginTop: "20px",
                      fontSize: "30px",
                    }}
                  >
                    Search Donors
                  </Button>
                </Link>
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{ textAlign: "right" }}
            style={{
              width: "100vw",
              height: "calc(100vh - 60px)",
              background:
                "linear-gradient( to right, rgba(51, 51, 51, 1), rgba(51, 51, 51, 0)), url('https://i.ibb.co/SvD6SCT/home-1-slider-2.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: "65px",
            }}
          >
            <Box sx={{ color: "white", display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  height: "100%",
                  mt: "15%",
                  textAlign: "left",
                  marginLeft: "10%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "32px",
                    lineHeight: "48px",
                    color: "white",
                    marginBottom: "4px",
                  }}
                >
                  Donate blood,save life !
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "60px",
                    lineHeight: "66px",
                    color: "white",
                  }}
                >
                  YOUR BLOOD <br /> CAN BRING SMILE <br />
                  IN OTHER PERSON FACE.
                </Typography>
                <Link href="/">
                  <Button
                    sx={{
                      fontWeight: 300,
                      fontSize: "30px",
                      marginTop: "20px",
                    }}
                  >
                    Search Donors
                  </Button>
                </Link>
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{ textAlign: "right" }}
            style={{
              width: "100vw",
              height: "calc(100vh - 60px)",
              background:
                "linear-gradient( to right, rgba(51, 51, 51, 1), rgba(51, 51, 51, 0)), url('https://i.ibb.co/bdKThNw/adspem-mission.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: "65px",
            }}
          >
            <Box sx={{ color: "white", display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  height: "100%",
                  mt: "15%",
                  textAlign: "left",
                  marginLeft: "10%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "32px",
                    lineHeight: "48px",
                    color: "white",
                    marginBottom: "4px",
                  }}
                >
                  Donate blood,save life !
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "60px",
                    lineHeight: "66px",
                    color: "white",
                  }}
                >
                 DONATE BLOOD AND<br/> GET REAL BLESSINGS.
                </Typography>
                <Link href="/">
                  <Button
                    sx={{
                      fontWeight: 300,
                      fontSize: "30px",
                      marginTop: "20px",
                    }}
                  >
                    Search Donors
                  </Button>
                </Link>
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide> 
           <Box
            sx={{ textAlign: "right" }}
            style={{
              width: "100vw",
              height: "calc(100vh - 60px)",
              background:
                "linear-gradient( to right, rgba(51, 51, 51, 1), rgba(51, 51, 51, 0)), url('https://i.ibb.co/VDCj9km/home-1-slider-1.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: "65px",
            }}
          >
            <Box sx={{ color: "white", display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  height: "100%",
                  mt: "15%",
                  textAlign: "left",
                  marginLeft: "10%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "32px",
                    lineHeight: "48px",
                    color: "white",
                    marginBottom: "4px",
                  }}
                >
                  Donate blood,save life !
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "60px",
                    lineHeight: "66px",
                    color: "white",
                  }}
                >
                  YOUR BLOOD <br /> CAN BRING SMILE <br />
                  IN OTHER PERSON FACE.
                </Typography>
                <Link href="/">
                  <Button
                    sx={{
                      fontWeight: 300,
                      fontSize: "30px",
                      marginTop: "20px",
                    }}
                  >
                    Search Donors
                  </Button>
                </Link>
              </Box>
              <Box></Box>
            </Box>
          </Box>
          </SwiperSlide>
        <SwiperSlide> <Box
            sx={{ textAlign: "right" }}
            style={{
              width: "100vw",
              height: "calc(100vh - 60px)",
              background:
                "linear-gradient( to right, rgba(51, 51, 51, 1), rgba(51, 51, 51, 0)), url('https://i.ibb.co/JsckY4P/blood-2-20210413113426.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: "65px",
            }}
          >
            <Box sx={{ color: "white", display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  height: "100%",
                  mt: "20%",
                  textAlign: "left",
                  marginLeft: "10%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "32px",
                    lineHeight: "48px",
                    color: "white",
                  }}
                >
                  Donate blood,save life !
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "60px",
                    lineHeight: "66px",
                    color: "white",
                  }}
                >
                  DONATE BLOOD <br /> AND INSPIRES OTHERS.
                </Typography>
                <Link href="/">
                  <Button
                    sx={{
                      fontWeight: 300,
                      marginTop: "20px",
                      fontSize: "30px",
                    }}
                  >
                    Search Donors
                  </Button>
                </Link>
              </Box>
              <Box></Box>
            </Box>
          </Box>
          
          </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSection;
