import { onPreprocessHttpMethod } from "@/utils/axiosFunction";
import axios from "axios";

const axiosFile = axios.create({
    headers: {
        "Content-Type": "multipart/form-data",
    },
})

onPreprocessHttpMethod(axiosFile);

export default axiosFile;