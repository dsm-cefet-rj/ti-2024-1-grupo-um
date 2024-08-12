import axios from "axios";

const createAxiosInstance = () => {
    // const { token } = useAuth();
  
    const api = axios.create({
      baseURL: "http://localhost:5000",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    });
    return api;
  };
  
  export { createAxiosInstance };