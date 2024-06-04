import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DonorCard = ({ item }: any) => {
  console.log(item);
  const { availability, name, location, email, bloodType,id } = item;
  return (
    <Box
    mx={1}
      sx={{
        boxShadow: "9px 9px 17px -7px rgba(255, 0, 0, 0.32)",
        display: "flex",
        justifyContent: "space-around",
        maxWidth: "400px",
        padding: "10px",
        gap: "10px",
        borderRadius: "10px",
        border:"red solid 1px"
      }}
    >
      <Stack>
        <Image
          src={"https://i.ibb.co/1mxj1db/rokto-avatar-150x150.png"}
          alt=""
          width={100}
          height={100}
        ></Image>
      </Stack>

      <Stack>
        <Typography>
          Name: <strong>{name}</strong>
        </Typography>
        <Typography>
          Group: <strong>{bloodType}</strong>
        </Typography>
        <Typography>
          Location: <strong>{location}</strong>
        </Typography>
        <Typography>
          Availability : <strong>{availability===true?"true":"false"}</strong>
        </Typography>
        <Typography sx={{ marginLeft: "auto" }}>
          <Link href={`/donorlist/${id}`}>
            <Button>Details</Button>
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default DonorCard;
