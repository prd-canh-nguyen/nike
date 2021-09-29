import axios from "axios";
import * as Config from '../constants/Config'

const apiCaller = (endpoint, method = "GET", body) => {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  }).catch((error) => {
    console.log(error);
  });
};

export default apiCaller ;