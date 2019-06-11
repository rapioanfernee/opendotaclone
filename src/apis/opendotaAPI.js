import axios from "axios";

export default axios.create({
  baseURL: "https://api.opendota.com/api"
});
