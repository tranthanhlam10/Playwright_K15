import { Locator } from "@playwright/test";
import { InformationColumnComponent } from "./InformationColumnComponent";

export class FooterComponent {
    public static selector: string = '.footer';

    constructor(private component: Locator){
        this.component = component;
    }

    InformationColumnComponent(): InformationColumnComponent {
        const compSel = InformationColumnComponent.selector;
        return new InformationColumnComponent(this.component.locator(compSel));
    }
}