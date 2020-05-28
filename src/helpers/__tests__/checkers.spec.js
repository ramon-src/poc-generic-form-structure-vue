import { isFunction } from "../checkers";

describe("Checkers", () => {
  describe("isFunction", () => {
    it("should return true when prop is a function", () => {
      expect(isFunction(() => {})).toBe(true);
    });

    it("should return false when prop is not a function", () => {
      expect(isFunction("() => {}")).toBe(false);
    });
  });
});
