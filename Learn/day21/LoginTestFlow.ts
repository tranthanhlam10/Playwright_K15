import LoginPage from "./LoginPage"
// Được xem như một controller
// Kiểu thiết kế này giống như cách mình làm ở Project Java
export default class LoginTestFlow{

    private username: string;
    private password: string;


    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;   
    }

    login(loginPage: LoginPage){
        loginPage.inputUsername(this.username);
        loginPage.inputPassword(this.password); 
        loginPage.btnLogin();  
    }
}