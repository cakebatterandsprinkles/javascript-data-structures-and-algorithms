const { isSameFrequency } = require("./sameFrequency");

test("isSameFrequency1 function exists", () => {
  expect(typeof isSameFrequency).toEqual("function");
});

test("'Numbers in '12344' has the same frequency of numbers in '43412''", () => {
  expect(isSameFrequency(12344, 43412)).toBeTruthy();
});

test("Numbers in '34' does not have the same frequency of numbers in '14'", () => {
  expect(isSameFrequency(34, 14)).toBeFalsy();
});

test("Numbers in '-23' does not have the same frequency of numbers in '32'", () => {
  expect(isSameFrequency(-23, 32)).toBeFalsy();
});

test("Numbers in '89.7' does not have the same frequency of numbers in '798'", () => {
  expect(isSameFrequency(89.7, 798)).toBeFalsy();
});

test("Numbers in 'cute' does not have the same frequency of numbers in 'etuc'", () => {
  expect(isSameFrequency("cute", "etuc")).toBeFalsy();
});
