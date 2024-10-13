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
   username() {
    return this.page.locator(LoginSelector.userNameSel)
  }
  password() {
    return this.page.locator(LoginSelector.passWordSel)
  }
  BtnLogin() {
    return this.page.locator(LoginSelector.btnLoginSel)
  }
}
