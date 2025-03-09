import * as fs from "fs";

export default class readJsonFile {
  private link!: string;

  constructor(link: string) {
    this.link = link;
  }

   async readJson() {
    try {
      const data = fs.readFileSync(this.link, "utf8");
      console.log(data.toString());
      return JSON.parse(data);
    } catch (err) {
      console.error("Lỗi đọc file:", err);
      return null;
    }
  }

  writeJson() {}

  deleteJson() {}

  openJson() {}

}
