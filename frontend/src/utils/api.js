import axios from "axios";
import { useSelector } from "react-redux";



const CreateAxiosInstance = () => {

  const { token } = useSelector((rootReducer) => rootReducer.auth);

  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: `${token}`,
    },
  });

  
};
  
  export default CreateAxiosInstance;