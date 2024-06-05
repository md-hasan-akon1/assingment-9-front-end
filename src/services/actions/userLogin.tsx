"use server";
import {  accessTokenKey,  refreshTokenKey } from "@/components/constant";
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
     cookies().set(refreshTokenKey, userInfo?.data?.refreshToken);
     cookies().set(accessTokenKey, userInfo?.data?.accessToken);
    
  }
 
  return userInfo;
};
