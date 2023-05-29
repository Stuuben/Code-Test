import { checkAnagram } from "../src/components/CheckAnagram";

describe("checkAnagram", () => {
  test("should return true for valid anagrams", () => {
    expect(checkAnagram("listen", "silent")).toBe(true);
    expect(checkAnagram("evil", "vile")).toBe(true);
    expect(checkAnagram("Eleven plus two", "Twelve plus one")).toBe(true);
  });
});

test("Should return false for non-anangrams", () => {
  expect(checkAnagram("cat", "dog")).toBe(false);
  expect(checkAnagram("hello", "world")).toBe(false);
  expect(checkAnagram("open", "closed")).toBe(false);
});

test("Should return false for words of diffrent lengths", () => {
  expect(checkAnagram("list", "listen")).toBe(false);
  expect(checkAnagram("elephant", "ant")).toBe(false);
});
