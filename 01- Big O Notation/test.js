const { addUpToV1, addUpToV2, calculateTime } = require("./bigO");

describe("Adds up numbers to the number given", () => {
  test("it should calculate 1 + ... + n", () => {
    expect(addUpToV1(20)).toEqual(210);
    expect(addUpToV1(10000)).toEqual(5000 * 10001);
    expect(addUpToV2(20)).toEqual(210);
    expect(addUpToV2(10000)).toEqual(5000 * 10001);
  });
});

describe("Execution time calculating function", () => {
  test("it should calculate the execution time of a given function", () => {
    calculateTime(addUpToV2, 100);
    calculateTime(addUpToV1, 100);

    V2time = calculateTime(addUpToV2, 100);
    V1time = calculateTime(addUpToV1, 100);

    expect(V1time).toBeGreaterThan(V2time);
  });
});
