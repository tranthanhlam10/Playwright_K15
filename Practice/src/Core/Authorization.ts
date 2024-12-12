import axios, { AxiosResponse } from "axios";
import API from "./API";

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
        API.baseURI + "/authentication",
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
      const token: string = response.data.accessToken.toString();
      return token as string;
    }
  }
}
