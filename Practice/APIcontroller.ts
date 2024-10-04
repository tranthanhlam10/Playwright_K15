import axios, { AxiosResponse } from "axios";
import API from "./API";
import qs = require("qs");



export default class APIcontroller {
    token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOjM0MjUsImlkIjozNDI1LCJ1c2VyIjp7ImlkIjozNDI1LCJlbWFpbCI6ImxhbXR0QHlvdW5ldGdyb3VwLmNvbSIsInBob25lIjoiMDk4NDY1NzQ0MyIsImZ1bGxuYW1lIjoibGFtbXR0In0sImlhdCI6MTcyODA1MjUwMywiZXhwIjoxNzMwNjQ0NTAzLCJhdWQiOiJodHRwczovL3lvdXJkb21haW4uY29tIiwiaXNzIjoiZmVhdGhlcnMiLCJzdWIiOiIzNDI1IiwianRpIjoiN2UwYjEyNWUtNjZiMC00NTY2LWEzMzgtZjQ3MTExY2VjYzgwIn0.POhsgSUgUxmoFr830zZ7mwOP5GYQpfyhF8R9xSXyXRE";
  
    group_id = 5097;
    async getReponse(api: API){
    const response = await axios.get(api.getBaseURI() + api.getEndpoint(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: this.token,
        "ynm-group-space": this.group_id,
      },
      params: api.getParams(),
    //   paramsSerializer: (params) => {
    //     return qs.stringify(params, { arrayFormat: "brackets" });
    //   },
    });
    console.log(response.data);
    console.log(response.status);
    return response.data;
  }
}
