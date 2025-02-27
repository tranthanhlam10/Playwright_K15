//import "jest";
import "jest-json-schema";

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchSchema(schema: object): R;
    }
  }
}

export {};
