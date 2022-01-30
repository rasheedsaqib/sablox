import axios from "axios";
import {toast} from "react-toastify";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/'
});

instance.interceptors.response.use((response) => response, (error) => {
    if(error.response){
        toast.error(error.response.data.message);
    }else {
        toast.success(error.message);
    }
    return error;
});

export default instance;