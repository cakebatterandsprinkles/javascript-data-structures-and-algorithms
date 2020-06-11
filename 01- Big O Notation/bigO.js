const { performance } = require("perf_hooks");

function addUpToV1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
}

function addUpToV2(n) {
  return (n * (n + 1)) / 2;
}

function calculateTime(cb, n) {
  let t1 = performance.now();
  cb(n);
  let t2 = performance.now();
  return t2 - t1;
}

module.exports = { addUpToV1, addUpToV2, calculateTime };
