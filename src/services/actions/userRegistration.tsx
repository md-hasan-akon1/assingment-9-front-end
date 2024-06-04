"use server";

export const userRegistration  = async (data: any) => {
  const res = await fetch(`${process.env.BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  
  });
  const userInfo = await res.json();
 
 
  return userInfo;
};
