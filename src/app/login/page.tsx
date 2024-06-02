"use client";
import BCForm from "@/components/form/BCForm";
import BCInput from "@/components/form/BCInput";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { userLogin } from "@/services/actions/userLogin";
import { useRouter } from "next/navigation";
import {  toast } from 'sonner'
const LoginPage = () => {
  const router=useRouter()
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleSubmit =async (values: FieldValues) => {
        const res=await userLogin(values)
        if(res.success){
          router.push('/')
          toast.success(res?.message)
        }
   
  };
  return (
    <Container component="main" maxWidth="xs">
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
          Login
        </Typography>
        <BCForm onSubmit={handleSubmit}>
          <BCInput
            name="email"
            type="email"
            sx={{ marginTop: "10px" }}
            required={true}
            fullWidth
            label="Email Address"
          />
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </BCForm>
      </Box>
    </Container>
  );
};

export default LoginPage;
