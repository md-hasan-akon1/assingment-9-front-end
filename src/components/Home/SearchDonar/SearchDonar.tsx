"use client";
import { availability, bloodType } from "@/components/constant";
import BCForm from "@/components/form/BCForm";
import BCInput from "@/components/form/BCInput";
import BCSelectField from "@/components/form/BCSelectField";
import { useGetAllDonorListQuery } from "@/redux/api/userApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import DonorCard from "../donarCard/DonorCard";

const SearchDonar = () => {
  const [query, setQuery] = useState({});
  const { data, isLoading } = useGetAllDonorListQuery({ ...query });
  useEffect(() => {}, [query]);

  const handleSubmit = async (values: FieldValues) => {
    setQuery(values);
  };

  return (
    <Box>
      <Box
        sx={{ backgroundColor: "#FCE0DF", py: "30px", mx: "auto", mb: "15px" }}
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
            DONORS SEARCH
          </Typography>
          <BCForm onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={3}>
                <BCSelectField
                  items={bloodType}
                  name="bloodType"
                  label="Blood Group"
                  sx={{ mb: 2, backgroundColor: "white" }}
                  fullWidth={true}
                ></BCSelectField>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <BCInput
                  name="location"
                  label="Location"
                  type="text"
                  sx={{ mb: 2, backgroundColor: "white" }}
                  fullWidth={true}
                ></BCInput>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                {" "}
                <BCSelectField
                  items={availability}
                  name="availability"
                  label="Availability"
                  fullWidth={true}
                  sx={{ mb: 2, backgroundColor: "white" }}
                ></BCSelectField>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Button type="submit" sx={{ width: "100%" }}>
                  Donors Search
                </Button>
              </Grid>
            </Grid>
          </BCForm>
        </Container>
      </Box>

      <Box>
        <Typography
          sx={{
            width: "50%",
            color: "white",
            mx: "auto",
            textAlign: "center",
            py: "10px",
            borderRadius: "8px",
            backgroundColor: "#EB2C29",
            fontSize: "24px",
            fontWeight: 700,
            mb: 6,
          }}
        >
          Top 10 Recent Donor
        </Typography>
        <Container>
          <Grid container spacing={1}>
            {isLoading
              ? "Loading"
              : data?.appointments?.slice(0, 10).map((item: any) => (
                  <Grid item md={4} key={item.id}>
                    <DonorCard item={item}></DonorCard>
                  </Grid>
                ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SearchDonar;
