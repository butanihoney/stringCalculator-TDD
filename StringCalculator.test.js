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

});