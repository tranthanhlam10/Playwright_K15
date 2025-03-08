import path from "path";
import readJsonFile from "./readJsonFile";

export default class AccountSevice {
  async initAccount(userRole: string): Promise<Account | undefined> {
    const jsonPath = path.resolve(__dirname, "./accounts.json");
    const jsonHelper = new readJsonFile(jsonPath);
    const accounts = await jsonHelper.readJson();

    console.log(typeof accounts);

    if (Array.isArray(accounts)) {
      return accounts.find((account: any) => userRole === account.role);
    } else {
      console.log("Read account failed");
    }
    return undefined;
  }
}
