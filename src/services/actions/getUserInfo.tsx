"use server";

import { accessToken } from "@/components/constant";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
export const getUser = async () => {
  const token = cookies().get(accessToken)?.value;
  if (token) {
          const decoded = jwtDecode(token!);;
    return decoded
    console.log(decoded);
  }
  
 
};
