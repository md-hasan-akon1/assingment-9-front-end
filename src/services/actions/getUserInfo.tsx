"use server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { accessTokenKey } from "@/components/constant";
export const getUser =  () => {
  const token = cookies().get(accessTokenKey)?.value;
  if (token) {
          const decoded = jwtDecode(token!);;
    return decoded
    
  }
  
 
};
