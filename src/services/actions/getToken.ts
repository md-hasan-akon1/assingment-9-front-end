"use server"
import { cookies } from "next/headers"

export const getToken=(key:any)=>{
        const token=cookies().get(key)?.value
        return token
}