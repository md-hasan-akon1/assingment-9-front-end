import { baseApi } from "./baseApi";
import { tagTypes, tagTypesList } from "../tag-types";
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
        return { url:`/my-profile`, method: "GET" };
      },
      providesTags:[tagTypes.getMe]
    }),
    myBloodRequest: build.query({
      query: () => {
        return { url:`/donation-request`, method: "GET" };
      },

    }),
    createDonarRequest: build.mutation({
      query: (data) => {
        return { url: `/donation-request`, method: "POST", data };
      },
    }),
    updateProfile: build.mutation({
      query: (data) => {
        return { url: `/update-profile`, method: "PUT", data };
      },
      invalidatesTags:[tagTypes.getMe]
    }),
    changePassword: build.mutation({
      query: (data) => {
        return { url: `/change-password`, method: "PUT", data };
      },
      
    }),
  }),
});

export const {
  useGetAllDonorListQuery,
  useGetDonorDetailQuery,
  useGetMeQuery,
  useCreateDonarRequestMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useMyBloodRequestQuery
} = userApi;
