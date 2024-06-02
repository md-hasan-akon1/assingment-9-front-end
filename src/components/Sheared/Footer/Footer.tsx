import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import assets from "@/assets" ;
// import instagramIcon from "@/assets/landing_page/instagram.png";
// import twitterIcon from "@/assets/landing_page/twitter.png";
// import linkedIcon from "@/assets/landing_page/linkedin.png";
import Image from "next/image";
const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography color="#fff" component={Link} href="/login">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={assets.images.facebook} width={30} height={30} alt="facebook" />
          <Image src={assets.images.instagram} width={30} height={30} alt="instagram" />
          <Image src={assets.images.linkedin} width={30} height={30} alt="linkedin" />
          <Image src={assets.images.twitter} width={30} height={30} alt="twitter" />
        </Stack>

        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 Blood Care. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            
            
          Bl<Box component="span" color="primary.main">oo</Box>d Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
