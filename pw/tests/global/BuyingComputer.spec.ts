import test, { Page } from "@playwright/test";
import { BuyingComputerFlow } from "../../test_flow/computer/BuyingComputerTestFlow";
import { ComputerType } from "../../types/ComputerType";


test(`Test Buying Computer | First Design`, async ({page}) => {
    

    // TODO go to targer page page on test data URL
    const testData:any = {
        type: ComputerType.standard,
        ram: "2GB"
    }

    
    // Init test flow
    const testFlow: BuyingComputerFlow = new BuyingComputerFlow(page, testData); 
    await testFlow.selectRAM();


    await page.waitForTimeout(3*1000);

})


