import { getDynamicDigits, customMask } from "../mask";

describe("Mask helpers", () => {
  describe("getDynamicDigits", () => {
    it("should getDynamicDigits generate 5 digits by default", () => {
      expect(getDynamicDigits({})).toBe("#####");
    });

    it("should getDynamicDigits generate 3 digits when maxDigits is 3", () => {
      expect(getDynamicDigits({ maxDigits: 3 })).toBe("###");
    });
  });
  describe("customMask", () => {
    it("should customMask return string when masks passed is string", () => {
      expect(customMask("#####.####")).toBe("#####.####");
    });

    it("should customMask return string from mask function", () => {
      expect(customMask(() => "##.####")).toBe("##.####");
    });
  });
});
