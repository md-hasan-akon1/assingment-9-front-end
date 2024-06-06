import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import assets from "@/assets";
import { useEffect, useState } from "react";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types/common";
import { getUser } from "@/services/actions/getUserInfo";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role="user" } = getUser() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={assets.images.logo} width={40} height={40} alt="logo" />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          Blood Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;