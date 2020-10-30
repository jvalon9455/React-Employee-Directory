import axios from "axios";
const URL = "https://randomuser.me/api/?results=50";

export default {
  search: function(query) {
    return axios.get(URL + query);
  }
};