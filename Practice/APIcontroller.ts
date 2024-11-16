import axios, { AxiosResponse } from "axios";
import API from "./API";
import qs = require("qs");


// Add more return infomation of API
export default class APIcontroller {
  async getMethod(api: API, token: string) {
    const response = await axios.get(API.baseURI + api.getEndpoint(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        "ynm-group-space": api.getGroupId(),
      },
      params: api.getParams(),
    });
    console.log(response.data);
    console.log(response.status);
    return {
      status: response.status,
      data: response.data};
  }

  async postMethod(api: API, token: string) {
    const response = await axios.post(API.baseURI + api.getEndpoint(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        "ynm-group-space": api.getGroupId(),
      },
      data: api.getData(),
    });
    console.log(response.data);
    console.log(response.status);
    return response.data;
  }

  async putMethod(api: API, token: string) {
    const response = await axios.put(API.baseURI + api.getEndpoint(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        "ynm-group-space": api.getGroupId(),
      },
      params: api.getParams(),
      data: api.getData(),
    });
    console.log(response.data);
    console.log(response.status);
    return response.data;
  }

  async patchMethod(api: API, token: string) {
    const response = await axios.patch(API.baseURI + api.getEndpoint(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        "ynm-group-space": api.getGroupId(),
      },
      params: api.getParams(),
      data: api.getData(),
    });
    console.log(response.data);
    console.log(response.status);
    return response.data;
  }

  async deleteMethod(api: API, token: string) {
    const response = await axios.delete(API.baseURI + api.getEndpoint(), {
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
