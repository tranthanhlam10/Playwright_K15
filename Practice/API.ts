import { get } from "http";

export default class API {
  private baseURI: string;
  private endpoint: string;
  private params?: object;
  private data?: object;
  private token: string;
  private groupId: number;

  constructor(
    baseURI: string,
    endpoint: string,
    token: string,
    groupId: number,
    params?: object,
    data?: object
  ) {
    this.baseURI = baseURI;
    this.endpoint = endpoint;
    this.params = params;
    this.token = token;
    this.groupId = groupId;
    this.data = data;
  }

  getBaseURI() {
    return this.baseURI;
  }

  getEndpoint() {
    return this.endpoint;
  }

  getParams() {
    return this.params;
  }

  getData() {
    return this.data;
  }

  getToken() {
    return this.token;
  }

  getGroupId() {
    return this.groupId;
  }
}