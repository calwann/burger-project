import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-aa77a.firebaseio.com/",
});

export default instance;
