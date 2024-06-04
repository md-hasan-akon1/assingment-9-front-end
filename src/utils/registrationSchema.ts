
import  z from 'zod';
// Define the validation schema using Zod
export const registrationSchema = z.object({
        name: z.string().min(1,{ message: "Name is required" }),

        email: z.string().min(1,{message:"email is required"}).email({ message: "Invalid email address" }),

        password: z.string().min(4, { message: "Password must be at least 4 characters long" }),

        confirmPass: z.string().min(4, { message: "Confirm Password must be at least 4 characters long" }),

        bloodType: z.string().min(1,{ message: "Blood Type is required" }),

        location: z.string().min(1,{ message: "Location is required" }),

        age: z.string().min(1,{message:"age is required"}),

        bio: z.string().min(1,{ message: "bio is required" }),

        lastDonationDate: z.date({ message: "last donation date is required" })

      }).refine(data => data.password == data.confirmPass, {
        path: [ 'confirmPass'],
        message: "Passwords do not match",
      });