// /// <reference types="jest" />
// import * as ajv from "ajv";

// declare global {
//   namespace jest {
//     interface Matchers<R, T> {
//       toBeValidSchema(): R;
//       toMatchSchema(schema: object): R;
//     }
//   }
// }

// export const matchers: jest.ExpectExtendMap;
// export type Options = ajv.Options & { AjvClass?: any };
// export function matchersWithOptions(
//   options: Options,
//   extendAjv?: (ajv: ajv.Ajv) => void
// ): jest.ExpectExtendMap;



import "jest-json-schema";

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Kiểm tra một đối tượng có khớp với JSON Schema không.
       * @param schema - Định nghĩa JSON Schema.
       */
      toMatchSchema(schema: object): R;
    }
  }
}

