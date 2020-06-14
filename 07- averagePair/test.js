const { averagePair1 } = require("./countUniqueValues");

test("averagePair functions exist", () => {
  expect(typeof averagePair1).toEqual("function");
});

test(" In [1, 2, 3] there is at least one pair of integers that has an average of 2.5 ", () => {
  expect(averagePair1([1, 2, 3], 2.5)).toBeTruthy();
});

test(" In [ -5, -1, 2, 3, 11, 26] there are no integers that has an average of 2.5 ", () => {
  expect(averagePair1([-5, -1, 2, 3, 11, 26], 2.5)).toBeFalsy();
});

test(" If an empty array is given, it will always return false ", () => {
  expect(averagePair1([], 5)).toBeFalsy();
});