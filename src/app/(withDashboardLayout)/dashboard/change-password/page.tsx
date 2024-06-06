"use client";

import BCForm from "@/components/form/BCForm";
import BCInput from "@/components/form/BCInput";
import { useChangePasswordMutation } from "@/redux/api/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type TParams = {
  params: {
    userId: string;
  };
};

const ChangePasswordPage = ({ params }: TParams) => {
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [conPassword, setConPassword] = useState(false);
  const [error, setError] = useState("");
  const handleClickShowPassword = () => setOldPassword(!oldPassword);
  const handleClickNewPassword = () => setNewPassword(!newPassword);
  const handleClickConPassword = () => setConPassword(!conPassword);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  //   console.log(params?.doctorId);
  const router = useRouter();

  const id = params?.userId;

  const [changePassword, { isLoading }] = useChangePasswordMutation();
  //   console.log(data);

  const handleFormSubmit = async (values: FieldValues) => {
    setError("");
    if (values.newPassword !== values.conPassword) {
      setError("new password and con pass did not match");
      return;
    }
    try {
      const res = await changePassword(values);


      if (res?.data?.message) {
        toast.success("change password Successfully!!!");
          router.push("/dashboard/profile");
      } else {
      setError("password did not change")
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const defaultValues = {
    oldPassword: "",
    newPassword: "",
    conPassword: "",
  };

  const passwordValidationSchema = z.object({
    oldPassword: z.string().min(1, { message: "oldPassword is required" }),
    newPassword: z.string().min(1, { message: "newPassword is required" }),
    conPassword: z.string().min(1, { message: "confirmPassword is required" }),
  });

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <BCForm
        onSubmit={handleFormSubmit}
        resolver={zodResolver(passwordValidationSchema)}
        defaultValues={defaultValues}
      >
        <Typography sx={{ textAlign: "center" }} component="h5" variant="h5">
          Password Change
        </Typography>
        <Grid container spacing={2} sx={{ my: 2, maxWidth: "500px" }}>
          <Grid item xs={12} sm={12} md={12}>
            <BCInput
              label="oldPassword"
              sx={{ marginTop: "10px" }}
              name="oldPassword"
              fullWidth
              type={oldPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {oldPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <BCInput
              label="New Password"
              sx={{ marginTop: "10px" }}
              name="newPassword"
              fullWidth
              type={newPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickNewPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {newPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <BCInput
              label="Confirm Password"
              sx={{ marginTop: "10px" }}
              name="conPassword"
              fullWidth
              type={conPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickConPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {conPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Typography sx={{ color: "red", marginLeft: "15px" }}>
            {error}
          </Typography>
          <Button disabled={isLoading} sx={{ width: "95%", mx: "auto", mt: "10px" }} type="submit">
            Change Password
          </Button>
        </Grid>
      </BCForm>
    </Box>
  );
};

export default ChangePasswordPage;
