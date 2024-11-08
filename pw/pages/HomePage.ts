import {Page} from "@playwright/test";
import HeaderComponent from "../components/global/HeaderComponent";
import { PageBodyComponent } from "../components/PageBodyComponent";
import { FooterComponent } from "../components/global/FooterComponent";
import { ComputerComponent } from "../components/computer/ComputerComponent";
import { ComputerType } from "../types/ComputerType";
import { StandardComputerComponent } from "../components/computer/StandardComputerComponent";
import { CheapComputerComponent } from "../components/computer/CheapComupterComponent";

export class HomePage {
  constructor(private page: Page) {
    this.page = page;
  }

  headerComponent(): HeaderComponent {
    return new HeaderComponent(this.page.locator(HeaderComponent.selector));
  }

  // Cho nay la cho tricky hoi nay
  pageBodyComponent(): PageBodyComponent {
    return new PageBodyComponent(this.page.locator(PageBodyComponent.selector));
  }

  footerComponent(): FooterComponent {
    return new FooterComponent(this.page.locator(FooterComponent.selector));
  };

  computerComponent(computerType: string): ComputerComponent {
    if(computerType === ComputerType.standard) {
      return new StandardComputerComponent();
    } else {
      return new CheapComputerComponent();
    }

    // -> Cant use narrow down searching scope anymore
  }




}