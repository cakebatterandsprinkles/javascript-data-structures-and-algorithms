function isAnagram1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let letter of str1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!frequencyCounter2[key]) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter = {};
  for (let letter of str1) {
    frequencyCounter[letter]
      ? (frequencyCounter[letter] += 1)
      : (frequencyCounter[letter] = 1);
  }

  for (let key of str2) {
    if (!frequencyCounter[key]) {
      return false;
    } else {
      frequencyCounter[key] -= 1;
    }
  }
  return true;
}

function isAnagram3(str1, str2) {
  let correctedStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  let correctedStr2 = str2.replace(/[^\w]/g, "").toLowerCase();
  console.log(correctedStr1, correctedStr2);
  if (correctedStr1.length !== correctedStr2.length) {
    return false;
  }

  let frequencyCounter = {};
  for (let letter of correctedStr1) {
    frequencyCounter[letter]
      ? (frequencyCounter[letter] += 1)
      : (frequencyCounter[letter] = 1);
  }

  for (let key of correctedStr2) {
    if (!frequencyCounter[key]) {
      return false;
    } else {
      frequencyCounter[key] -= 1;
    }
  }
  return true;
}

module.exports = { isAnagram1, isAnagram2, isAnagram3 };
