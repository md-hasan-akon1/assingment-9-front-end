import { SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
 


type TInputFiled = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  type?: string;
  sx?: SxProps;
  required?: boolean;
  InputProps?:{}
};

const BCInput = ({
  name,
  label,
  size="small",
  fullWidth,
  type,
  sx,
  required,
  InputProps
}: TInputFiled) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field,fieldState:{error} }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          fullWidth={fullWidth}
          sx={{ ...sx }}
          size={size}
          required={required}
          InputProps={ InputProps}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default BCInput;
