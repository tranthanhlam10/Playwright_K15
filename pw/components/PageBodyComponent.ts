import { Locator } from "@playwright/test";
import { ProductItemComponent } from "./ProductItemComponent";



export class PageBodyComponent {

    // Nhung locator deu phai co nhung thay doi, moi co viejc cho minh lam
  public static selector: string = '.page-body';
  constructor(private component: Locator) {
    this.component = component;
  }


  // Cho nay se hoi tricky => Nen can hieu ro lai cho nay
  async productItemComponentList(): Promise<ProductItemComponent[]> {

    // Co nhieu hon 1 locator match voi dieu kien nay, nen phai dung phuong thuc all
    const productItemComponent = await this.component.locator(ProductItemComponent.selector).all();
    return productItemComponent.map(
      (locator) => new ProductItemComponent(locator)
    );
  }


}