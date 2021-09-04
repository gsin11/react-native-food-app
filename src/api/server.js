import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.0.119:19000",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
});
