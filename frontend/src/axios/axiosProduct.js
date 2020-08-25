import Axios from "axios";

const axiosProduct = Axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default axiosProduct;
