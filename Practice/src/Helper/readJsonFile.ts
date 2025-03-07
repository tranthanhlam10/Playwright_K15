import * as fs from "fs";

export default class readJsonFile {
  private link!: string;

  constructor(link: string) {
    this.link = link;
  }

  //read js file
    // readJson()  {
    //   fs.readFile(this.link, function (err, data) {
    //     if (err) throw err;
    //     console.log(data.toString()); // Cho nay phai them buoc parse ra Json
    //   });
    // }


   async readJson() {
    try {
      const data = fs.readFileSync(this.link, "utf8");
      console.log(data.toString());
      return data.toString();
    } catch (err) {
      console.error("Lỗi đọc file:", err);
      return null;
    }
  }

//   readJson() {
//     const data = fs.readFileSync(this.link, "utf-8");
//     return JSON.parse(data);
//   }

  writeJson() {}

  deleteJson() {}

  openJson() {}

}
