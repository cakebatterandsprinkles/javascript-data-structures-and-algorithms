const { isAnagram1, isAnagram2, isAnagram3 } = require("./anagram");

test("anagram functions exist", () => {
  expect(typeof isAnagram1).toEqual("function");
  expect(typeof isAnagram2).toEqual("function");
  expect(typeof isAnagram3).toEqual("function");
});

test("'listen' is an anagram of 'silent'", () => {
  expect(isAnagram1("listen", "silent")).toBeTruthy();
  expect(isAnagram2("listen", "silent")).toBeTruthy();
  expect(isAnagram3("listen", "silent")).toBeTruthy();
});

test("'great' is not an anagram of 'egret'", () => {
  expect(isAnagram1("great", "egret")).toBeFalsy();
  expect(isAnagram2("great", "egret")).toBeFalsy();
  expect(isAnagram3("great", "egret")).toBeFalsy();
});

test("'awesome' is not an anagram of 'awesomes'", () => {
  expect(isAnagram1("awesome", "awesomes")).toBeFalsy();
  expect(isAnagram2("awesome", "awesomes")).toBeFalsy();
  expect(isAnagram3("awesome", "awesomes")).toBeFalsy();
});

test("'listen?!!!' is an anagram of 'SiLenT'", () => {
  expect(isAnagram3("listen?!", "Silent")).toBeTruthy();
});

test("'iceman0901' is an anagram of '67934Cinema'", () => {
  expect(isAnagram3("iceman0901", "1900Cinema")).toBeTruthy();
});
