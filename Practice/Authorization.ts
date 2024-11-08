import axios, { AxiosResponse } from "axios";
import API from "./API";
import QueryString = require("qs");

export default class Authorrization {
  private userName: string;
  private passWord: string;
  private strategy: string;

  constructor(userName: string, passWord: string, strategy: string) {
    this.userName = userName;
    this.passWord = passWord;
    this.strategy = strategy;   
  }

  async generateToken() {

    {
    const response: AxiosResponse<{ accessToken: string }> = await axios.post(
      "https://api-staging-eca.younetmedia.com/authentication",
      {
        email: this.userName,
        password: this.passWord,
        strategy: this.strategy,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const token: string = response.data.accessToken;
    return token;
    
  } 
} 


async useToken() {
  const token = await this.generateToken();  // `token` là `string`
  console.log("", token) 
  const hi: string = token ;
  return hi;    
}




}