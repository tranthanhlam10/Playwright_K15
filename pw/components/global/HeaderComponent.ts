import { Locator } from "@playwright/test";

export default class HeaderComponent{

    public static selector: string = '.header';
    private headerLogoSel = '.header-logo';
    
    constructor(private component: Locator){
        this.component = component;
    }

    // Narrow down searching scope
    headerLogo(): Locator {
        return this.component.locator(this.headerLogoSel);
    }


    /**
     * HomePage > HeaderComponent > HeaderLogo
     * ProductCategoryPage > HeaderComponent ....
     * Mot page khong nhung vo tung component rieng le, nhung ma nhung vo nhung component chung
     * 
     * [X] BasePage: common elements
     * -> HomePage extends
     */


}