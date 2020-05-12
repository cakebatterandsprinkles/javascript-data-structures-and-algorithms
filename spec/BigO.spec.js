const {
  addUpToV1,
  addUpToV2,
  calculateTime,
} = require("../Big O Notation/BigO");

describe("Add up numbers to the number given", () => {
  it("calculates that 1 + ... + n", () => {
    expect(addUpToV1(20)).toEqual(210);
    expect(addUpToV1(10000)).toEqual(5000 * 10001);
  });
});

describe("Add up numbers to the number given", () => {
  it("calculates that 1 + ... + n", () => {
    expect(addUpToV2(20)).toEqual(210);
    expect(addUpToV2(10000)).toEqual(5000 * 10001);
  });
});

describe("Calculates the execution time", () => {
  it(" of a given function", () => {
    let V1time = 0;
    let V2time = 0;

    calculateTime(addUpToV2, 100);
    calculateTime(addUpToV1, 100);

    V2time += calculateTime(addUpToV2, 100);
    V1time += calculateTime(addUpToV1, 100);

    expect(V1time).toBeGreaterThan(V2time);
  });
});
