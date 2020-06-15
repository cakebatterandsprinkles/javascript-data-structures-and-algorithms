const { maxSubarraySum1 } = require("./maxSubarraySum");

test("maxSubarraySum functions exist", () => {
  expect(typeof maxSubarraySum1).toEqual("function");
});

test("maximum sum of 2 consecutive elements in [1,3,5,2,8,1,3] is 10", () => {
  expect(maxSubarraySum1([1, 3, 5, 2, 8, 1, 3], 2)).toEqual(10);
});

test("maximum sum of 1 consecutive elements in [5, 2, 8, 1, 3, 9] is 9", () => {
  expect(maxSubarraySum1([5, 2, 8, 1, 3, 9], 1)).toEqual(10);
});

test("maximum sum of 4 consecutive elements in [4, 2, 2, 6, 3, 1] is 14", () => {
  expect(maxSubarraySum1([4, 2, 2, 6, 3, 1], 4)).toEqual(14);
});

test("maximum sum of 4 consecutive elements in [] is null", () => {
  expect(maxSubarraySum1([], 4)).toBeNull();
});
