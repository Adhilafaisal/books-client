import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3002",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  axiosSecure.interceptors.request.use(
    function (config) {
      
      const token = localStorage.getItem("access-token");

      config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    function (error) {
      
      return Promise.reject(error);
    });

//Add a response interceptor
  axiosSecure.interceptors.response.use(function (response) {
       
        return response;
      },async (error)=> {
        const status = error.response.status;
        if (status === 401 || status === 403) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      });

  return axiosSecure;
};

export default useAxiosSecure;
