import { isEmpty } from "./validators";

describe("Form/validator/isempty", () => {
  it("empty string", () => {
    expect(isEmpty("")).toBe(true);
  });
  it("string with only spaces", () => {
    expect(isEmpty(" ")).toBe(true);
  });
  it("undefined string", () => {
    expect(isEmpty(undefined)).toBe(true);
  });
  it("null string", () => {
    expect(isEmpty(null)).toBe(true);
  });
  it("string with value", () => {
    expect(isEmpty("value")).toBe(false);
  });
});
