import { get } from "http";

export default class API {
  // Format lại URL, tư duy chia theo folder, hoặc chắc năng
  public static baseURI: string = "https://api-staging-eca.younetmedia.com/";
  private endpoint: string;
  private params?: object;
  private data?: object;
  private token: string;
  private groupId: number;

  constructor(
    endpoint: string,
    token: string,
    groupId: number,
    params?: object,
    data?: object
  ) 
  
  {
    this.endpoint = endpoint;
    this.params = params;
    this.token = token;
    this.groupId = groupId;
    this.data = data;
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