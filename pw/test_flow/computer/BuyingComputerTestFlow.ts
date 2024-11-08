import { Page } from "@playwright/test";
import { ComputerComponent } from "../../components/computer/ComputerComponent";
import { HomePage } from "../../pages/HomePage";

export class BuyingComputerFlow {
   
    constructor(private page: Page , private testData: any){ 
        this.page = page;   
        this.testData = testData;
    }
    // Khong dung duoc searching Narrow down scope
    async selectRAM() {
        const homePage: HomePage = new HomePage(this.page);  
        const computerComp: ComputerComponent = homePage.computerComponent(this.testData.type);
        await computerComp.selectRAM(this.testData.RAM);  
    }


}