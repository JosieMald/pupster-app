import axios from "axios";
const BASEURL = "https://dog.ceo/api/breeds/image/random";



export default {
  getDogs: function () {
    return axios.get(BASEURL);
},
};