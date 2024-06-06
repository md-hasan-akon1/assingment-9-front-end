"use server"

import { accessTokenKey, refreshTokenKey } from "@/components/constant"
import { cookies } from "next/headers"

export const logOutUser=async()=>{
        cookies().delete(accessTokenKey)

        cookies().delete(refreshTokenKey)
}