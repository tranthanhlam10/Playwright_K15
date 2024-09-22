import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage {
  inputUsername(username: String): string {
    throw new Error("Method not implemented.");
  }
  inputPassword(password: String): string {
    throw new Error("Method not implemented.");
  }
  btnLogin(): void {
    throw new Error("Method not implemented.");
  }
}
