const { areThereDuplicates1 } = require("./areThereDuplicates");

test("areThereDuplicates functions exist", () => {
  expect(typeof areThereDuplicates1).toEqual("function");
});

test("'a', 'a', 5, 7 argument list has at least one duplicate", () => {
  expect(areThereDuplicates1("a", "a", 5, 7)).toBeTruthy();
});

test("'1, 2, 3' argument list does not have a duplicate", () => {
  expect(areThereDuplicates1(1, 2, 3)).toBeFalsy();
});

test("'['hello', 'world'], ['hello', 'world'], 234, true' argument list has at least one duplicate", () => {
  expect(
    areThereDuplicates1(["hello", "world"], ["hello", "world"], 234, true)
  ).toBeTruthy();
});
