export default abstract class LoginPage {
  abstract inputUsername(username: String): string;
  abstract inputPassword(password: String): string;
  abstract btnLogin(): void;
}