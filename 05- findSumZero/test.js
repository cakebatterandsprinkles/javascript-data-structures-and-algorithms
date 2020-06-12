const { findSumZero1, findSumZero2 } = require("./findSumZero");

test("findSumZero functions exist", () => {
  expect(typeof findSumZero1).toEqual("function");
  expect(typeof findSumZero2).toEqual("function");
});

test(" the first pair that has a sum of 0 in [-2, -1, 0, 1, 2] is [-2, 2]", () => {
  expect(findSumZero1([-2, -1, 0, 1, 2].sort())).toEqual([-2, 2].sort());
  expect(findSumZero2([-2, -1, 0, 1, 2].sort())).toEqual([-2, 2].sort());
});

test(" the first pair that has a sum of 0 in [-4, 0, 1, 2, 3] is undefined", () => {
  expect(findSumZero1([-4, 0, 1, 2, 3])).toBeUndefined();
  expect(findSumZero2([-4, 0, 1, 2, 3])).toBeUndefined();
});
