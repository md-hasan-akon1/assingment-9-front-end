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
    getDonorDetail: build.query({
      query: (args) => {
        return { url: `/donor-list/${args}`, method: "GET" };
      },
    }),
    getMe: build.query({
      query: () => {
        return { url: `/my-profile`, method: "GET" };
      },
    }),
    createDonarRequest: build.mutation({
      query: (data) => {
        return { url: `/donation-request`, method: "POST", data };
      },
    }),
  }),
});

export const {
  useGetAllDonorListQuery,
  useGetDonorDetailQuery,
  useGetMeQuery,
  useCreateDonarRequestMutation
} = userApi;
