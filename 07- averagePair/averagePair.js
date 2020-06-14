function averagePair1(arr, num) {
  // if arr.length === 0, return 0
  if (arr.length === 0) {
    return false;
  }
  let i = 0;
  while (i < arr.length - 1) {
    for (let j = 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 === num) return true;
    }
    i++;
  }
  return false;
}

function averagePair2(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

module.exports = { averagePair1, averagePair2 };
