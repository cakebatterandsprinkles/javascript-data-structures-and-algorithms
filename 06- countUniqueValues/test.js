const { countUniqueValues1 } = require("./countUniqueValues");

test("countUniqueValue functions exist", () => {
  expect(typeof countUniqueValues1).toEqual("function");
});

test(" the amount  of unique values in [1, 1, 1, 1, 1, 1, 5] is 2", () => {
  expect(countUniqueValues1([1, 1, 1, 1, 1, 1, 5].sort())).toEqual(2);
});

test(" the amount  of unique values in [-2, -2, 0, 2, 2, 7, 67] is 5", () => {
  expect(countUniqueValues1([-2, -2, 0, 2, 2, 7, 67].sort())).toEqual(5);
});

test(" the amount  of unique values in [] is 0", () => {
  expect(countUniqueValues1([].sort())).toEqual(0);
});
