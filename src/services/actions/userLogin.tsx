"use server";
import { accessToken, refreshToken } from "@/components/constant";
import { cookies } from "next/headers";
export const userLogin = async (data: any) => {
  const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
    cache: "no-store",
  });
  const userInfo = await res.json();
  if (userInfo.success) {
     cookies().set(refreshToken, userInfo?.data?.refreshToken);
     cookies().set(accessToken, userInfo?.data?.accessToken);
    
  }
 
  return userInfo;
};
