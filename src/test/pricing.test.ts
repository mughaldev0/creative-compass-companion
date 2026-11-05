import { describe, expect, it } from "vitest";
import { discountPercent } from "@/data/site";

describe("discountPercent", () => {
  it("computes 40% for PKR 4,999 down to PKR 2,999", () => {
    expect(discountPercent(4999, 2999)).toBe(40);
  });
  it("returns 0 when there is no real discount", () => {
    expect(discountPercent(4999, 4999)).toBe(0);
  });
});
