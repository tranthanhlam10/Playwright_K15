import { Page } from "@playwright/test";
import { LoginSelector } from "./LoginSelector";

export default class LoginPage {
  // Scope to keep element's selector values

  private page: Page;
  // private userNameSel = "#username";
  // private passWordSel = "#password";
  // private btnLoginSel = 'button[type="submit"]';

  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  // Main interaction methods
  async inputUsername(username: string) {
    await this.page.locator(LoginSelector.userNameSel).fill(username);
  }
  async inputPassword(password: string) {
    await this.page.locator(LoginSelector.passWordSel).fill(password);
  }
  async clickBtnLogin() {
    await this.page.locator(LoginSelector.btnLoginSel).click();
  }
}
