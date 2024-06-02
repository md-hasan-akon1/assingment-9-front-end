import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDonorList: build.query({
      query: (args) => {
        console.log(args.query);
        return { url: "/donor-list", method: "GET", params: args };
      },
      transformResponse: (response: [], meta: IMeta) => {
        return {
          appointments: response,
          meta,
        };
      },
    }),
  }),
});

export const { useGetAllDonorListQuery } = userApi;
