const { isSubsequence1, isSubsequence2 } = require("./isSubsequence");

test("isSubsequence functions exist", () => {
  expect(typeof isSubsequence1).toEqual("function");
  expect(typeof isSubsequence2).toEqual("function");
});

test("'hello' exist in the same order inside 'hello world'", () => {
  expect(isSubsequence1("hello", "hello world")).toBeTruthy();
  expect(isSubsequence2("hello", "hello world")).toBeTruthy();
});

test("'sing' exist in the same order inside 'sibling'", () => {
  expect(isSubsequence1("sing", "sibling")).toBeTruthy();
  expect(isSubsequence2("sing", "sibling")).toBeTruthy();
});

test("'cow' exist in the same order inside 'cottonflower'", () => {
  expect(isSubsequence1("cow", "cottonflower")).toBeTruthy();
  expect(isSubsequence2("cow", "cottonflower")).toBeTruthy();
});

test("'abed' does not exist in the same order inside 'adeb'", () => {
  expect(isSubsequence1("abed", "adeb")).toBeFalsy();
  expect(isSubsequence2("abed", "adeb")).toBeFalsy();
});

test("'' exists in the same order inside 'jingleberry'", () => {
  expect(isSubsequence1("", "jingleberry")).toBeTruthy();
  expect(isSubsequence2("", "jingleberry")).toBeTruthy();
});
