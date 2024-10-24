import { it, expect, describe } from "vitest";
import { add } from "./src/utils";

describe("StringCalculator", () => {
    it("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    it("should return the sum of comma-separated numbers", () => {
        expect(add("1,2,3")).toBe(6);
    });

    it("should return the sum of newline-separated numbers", () => {
        expect(add("1\n2\n3")).toBe(6);
    });

    it("should return the sum of numbers separated by a custom delimiter", () => {
        expect(add("//, \n1,2,3")).toBe(6);
    });

    it("should throw an error for negative numbers", () => {
        expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    });

    it("should handle a mixture of delimiters (commas, newlines, custom)", () => {
        expect(add("//;\n1,2\n3;4")).toBe(10);
    });

    it("should ignore non-number strings", () => {
        expect(add("1,a,2")).toBe(3);
    });
});