import axios from "axios";

const AxiosInstance = axios.create({
    baseURL:'http://localhost:3000'
})
const UseAxiosInstance = () => {
   return AxiosInstance
};

export default UseAxiosInstance;