"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import BCForm from "@/components/form/BCForm";
import { FieldValues } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DatePicker } from "@mui/lab";
import BCInput from "@/components/form/BCInput";
import { zodResolver } from "@hookform/resolvers/zod";

import BCDatePicker from "@/components/form/BCDatePicker";
import BCSelectField from "@/components/form/BCSelectField";
import { bloodType } from "@/components/constant";
import { registrationSchema } from "@/utils/registrationSchema";
const defaultValue = {
  name: "",
  email: "",
  password: "",
  confirmPass: "",
  bloodType: "",
  location: "",
  age: 0,
  bio: "",
  lastDonationDate: null,
};
const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleConClickShowPassword = () => setShowConPassword(!showConPassword);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "red solid 1px",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        <Typography component="h1" variant="h5">
          Registration Please!
        </Typography>
        <BCForm
          onSubmit={handleSubmit}
          resolver={zodResolver(registrationSchema)}
          // defaultValues={defaultValue}
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <BCInput name="name" type="text" label="Name" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <BCInput name="email" type="email" label="Email" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <BCInput
                label="Password"
                required={true}
                sx={{ marginTop: "10px" }}
                name="password"
                fullWidth
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <BCInput
                label="confirmPass"
                required={true}
                sx={{ marginTop: "10px" }}
                name="confirmPass"
                fullWidth
                type={showConPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleConClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <BCSelectField
                name="bloodType"
                items={bloodType}
                label="bloodType"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <BCInput name="location" type="text" label="location" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <BCInput name="age" type="number" label="Age" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <BCInput name="bio" type="text" label="bio" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <BCDatePicker
                name="lastDonationDate"
                label="lastDonationDate"
                fullWidth={true}
              />
            </Grid>
          </Grid>

          <Button
            sx={{
              margin: "10px 0px",
            }}
            fullWidth={true}
            type="submit"
          >
            Registration
          </Button>
        </BCForm>
      </Box>
    </Container>
  );
};

export default RegisterPage;
