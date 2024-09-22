import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage{
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