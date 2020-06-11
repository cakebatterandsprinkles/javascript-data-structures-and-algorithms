function isSameFrequency(num1, num2) {
  // Both numbers should be positive integers (no floating points/negative numbers/strings/arrays etc.)
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

  // Convert numbers to string to make them iterable
  let stringifiedNum1 = num1.toString();
  let stringifiedNum2 = num2.toString();

  // Create a frequencyCounter object for each num
  let frequencyCounter1 = createFrequencyCounter(stringifiedNum1);
  let frequencyCounter2 = createFrequencyCounter(stringifiedNum2);
  console.log(frequencyCounter1, frequencyCounter2);
  // Check if they have the same amount of keys
  if (
    Object.keys(frequencyCounter1).length !==
    Object.keys(frequencyCounter2).length
  ) {
    return false;
  }

  // Check if the values of those keys are the same
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
