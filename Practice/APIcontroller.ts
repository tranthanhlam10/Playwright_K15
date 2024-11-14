import axios, { AxiosResponse } from "axios";
import API from "./API";
import qs = require("qs");
export default class APIcontroller {
  async getMethod(api: API, token: string) {
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

  async postMethod(api: API, token: string) {
    const response = await axios.post(api.getBaseURI() + api.getEndpoint(), {
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
    const response = await axios.put(api.getBaseURI() + api.getEndpoint(), {
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
    const response = await axios.patch(api.getBaseURI() + api.getEndpoint(), {
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
    const response = await axios.delete(api.getBaseURI() + api.getEndpoint(), {
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
