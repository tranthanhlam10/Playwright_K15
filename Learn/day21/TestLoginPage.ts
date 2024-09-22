import ExternalLoginPage from "./ExternalLoginPage";
import InternalLoginPage from "./InternalLoginPage";
import LoginPage from "./LoginPage";
import LoginTestFlow from "./LoginTestFlow";

// Thay vì mình viết chỗ LoginTestFlow ở đây, thì mình tách ra lớp riêng, lớp này mình chỉ tạo dữ liệu và gọi lại Controller để test

const internalLoginPage: LoginPage = new InternalLoginPage();
const externalLoginPage: LoginPage = new ExternalLoginPage();
const loginTestFlow = new LoginTestFlow("teo", "123456789");

loginTestFlow.login(internalLoginPage);
loginTestFlow.login(externalLoginPage);
