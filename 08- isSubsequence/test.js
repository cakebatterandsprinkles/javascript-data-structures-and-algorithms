const { isSubsequence1 } = require("./isSubsequence");

test("isSubsequence functions exist", () => {
  expect(typeof isSubsequence1).toEqual("function");
});

test("'hello' exist in the same order inside 'hello world'", () => {
  expect(isSubsequence1("hello", "hello world")).toBeTruthy();
});

test("'sing' exist in the same order inside 'sibling'", () => {
  expect(isSubsequence1("sing", "sibling")).toBeTruthy();
});

test("'cow' exist in the same order inside 'cottonflower'", () => {
  expect(isSubsequence1("cow", "cottonflower")).toBeTruthy();
});

test("'abed' does not exist in the same order inside 'adeb'", () => {
  expect(isSubsequence1("abed", "adeb")).toBeFalsy();
});
