
import type { Config } from "@jest/types";
import { matchers } from "jest-json-schema";
import "jest-json-schema";

//expect.extend(matchers);


const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "allure-jest/node",
  reporters: [
    "default", // Báo cáo mặc định
    [
      "jest-allure",
      {
        outputDirectory: "allure-results", // Thư mục kết quả Allure
      },
    ],
  ],
  //setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Thiết lập thêm cho Allure
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },


};



module.exports = {
  setupFilesAfterEnv: ["./jest.config.ts"]
};




export default config;

