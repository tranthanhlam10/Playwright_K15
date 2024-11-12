import axios, { AxiosResponse } from "axios";
import API from "./API";
import qs = require("qs");
export default class APIcontroller {
    
    async getReponse(api: API, token: string ){
    const response = await axios.get(api.getBaseURI() + api.getEndpoint(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        "ynm-group-space": api.getGroupId(),
      },
      params: api.getParams(),
    });
    console.log(response.data);
    console.log(response.status);
    return response.data;
  }
}
