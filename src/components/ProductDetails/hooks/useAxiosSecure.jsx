import axios from "axios";
import UseAuth from "./UseAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: `http://localhost:3000`,
});
const useAxiosSecure = () => {
  const { user, signOutUser } = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // request interceptor
    const requestInterceptor = instance.interceptors.request.use((config) => {
        const token = user.accessToken
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
      return config;
    });
    // response interceptor
    const responseInterceptor = instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          console.log("log out the user ofr bad request");
          signOutUser().then(() => {
            navigate("/register");
          });
        }
      },
    );
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, signOutUser, navigate]);
  return instance;
};

export default useAxiosSecure;
