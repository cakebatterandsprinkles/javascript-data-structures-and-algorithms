function isSameFrequency(num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 % 1 !== 0 ||
    num2 % 1 !== 0 ||
    num1 < 0 ||
    num2 < 0
  ) {
    return false;
  }

  let stringifiedNum1 = num1.toString();
  let stringifiedNum2 = num2.toString();
  let frequencyCounter1 = createFrequencyCounter(stringifiedNum1);
  let frequencyCounter2 = createFrequencyCounter(stringifiedNum2);

  if (
    Object.keys(frequencyCounter1).length !==
    Object.keys(frequencyCounter2).length
  ) {
    return false;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

function createFrequencyCounter(str) {
  let frequencyCounter = {};
  str.split("").forEach((num) => {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  });
  return frequencyCounter;
}

module.exports = { isSameFrequency };
