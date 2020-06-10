const { isAnagram1, isAnagram2, isAnagram3 } = require("../Anagram/anagram");

describe("Anagram1", () => {
  it("determines if two strings are anagrams", () => {
    expect(isAnagram1("listen", "silent")).toBe(true);
    expect(isAnagram1("great", "egret")).toBeFalse();
    expect(isAnagram1("awesome", "awesomes")).toBeFalse();
  });
});

describe("Anagram2", () => {
  it("determines if two strings are anagrams", () => {
    expect(isAnagram2("listen", "silent")).toBe(true);
    expect(isAnagram2("great", "egret")).toBeFalse();
    expect(isAnagram2("awesome", "awesomes")).toBeFalse();
  });
});

describe("Anagram3", () => {
  it("determines if two strings are anagrams", () => {
    expect(isAnagram3("listen?!", "Silent")).toBe(true);
    expect(isAnagram3("great foo", "egret FOO")).toBeFalse();
    expect(isAnagram3("awesome", "awesomes")).toBeFalse();
  });
});
