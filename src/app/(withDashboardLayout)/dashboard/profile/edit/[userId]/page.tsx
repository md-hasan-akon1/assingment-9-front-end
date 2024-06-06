"use client";

import { availability, bloodType } from "@/components/constant";
import BCDatePicker from "@/components/form/BCDatePicker";
import BCForm from "@/components/form/BCForm";
import BCInput from "@/components/form/BCInput";
import BCSelectField from "@/components/form/BCSelectField";
import { useGetMeQuery, useUpdateProfileMutation } from "@/redux/api/userApi";
import { dateFormatter } from "@/utils/dateFormetter";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    userId: string;
  };
};

const EditProfilePage = ({ params }: TParams) => {
  //   console.log(params?.doctorId);
  const router = useRouter();
  const { data,isSuccess } = useGetMeQuery({});
  const [updateProfile]=useUpdateProfileMutation()

  const id = params?.userId;
 

  //   console.log(data);

  const handleFormSubmit = async (values: FieldValues) => {
    
    values.userProfile.age = Number(values.userProfile.age);
    values.userProfile.lastDonationDate = dateFormatter(values.userProfile.lastDonationDate);

   
    // console.log({ id: values.id, body: values });

    try {
      const res = await updateProfile(values).unwrap();
      console.log(res);
      if (res.id) {
        toast.success("Profile Updated Successfully!!!");
        router.push("/dashboard/profile");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const userProfile={
        bio: data?.userProfile?.bio || "",
       age: Number(data?.userProfile?.age )|| "",
       lastDonationDate: data?.userProfile?.lastDonationDate || "",  
  }
  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    phoneNumber: data?.phoneNumber || "",
    bloodType: data?.bloodType || "",
    location: data?.location || "",
    availability: data?.availability=="true"?"true":"false" || "",
    userProfile:userProfile
  };

  return (
    <Box>
      <Typography component="h5" variant="h5">
        Profile Update 
      </Typography>
      {!isSuccess ? (
        "Loading..."
      ) : (
        <BCForm
          onSubmit={handleFormSubmit}
           defaultValues={data && defaultValues}
        >
          <Grid container spacing={2} sx={{ my: 5 }}>
            <Grid item xs={12} sm={12} md={4}>
              <BCInput
                name="name"
                label="Name"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <BCInput
                name="email"
                type="email"
                label="Email"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <BCInput
                name="phoneNumber"
                label="Contract Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <BCInput
                name="location"
                label="Address"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <BCSelectField
                items={availability}
                name="availability"
                label="Availability"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <BCInput
                name="userProfile.bio"
                type="text"
                label="Bio"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <BCSelectField
                items={bloodType}
                name="bloodType"
                label="bloodType"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <BCInput
                name="userProfile.age"
                type="number"
                label="Age"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <BCDatePicker
                name="userProfile.lastDonationDate"
                label="Last Donation Date"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>

          <Button sx={{ width: "100%" }} type="submit">
            Update
          </Button>
        </BCForm>
      )}
    </Box>
  );
};

export default EditProfilePage;
