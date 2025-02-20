import "jest";

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchSchema(schema: object): R;
    }
  }
}
