import { get } from "http";

export default class API {
  private baseURI: string;
  private endpoint: string;
  private params: {};
  private token: string;
  private groupId: number;

  constructor(
    baseURI: string,
    endpoint: string,
    params: {},
    token: string,
    groupId: number
  ) {
    this.baseURI = baseURI;
    this.endpoint = endpoint;
    this.params = params;
    this.token = token;
    this.groupId = groupId;
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

  getToken(){
    return this.token;
  }

  getGroupId() {
    return this.groupId;
  }
}