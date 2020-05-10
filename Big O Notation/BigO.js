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

let t1 = performance.now();
addUpToV1(10000000000);
let t2 = performance.now();
console.log(`Time elapsed for V1: ${(t2 - t1) / 1000} seconds.`);

let t3 = performance.now();
addUpToV2(10000000000);
let t4 = performance.now();
console.log(`Time elapsed for V2: ${(t4 - t3) / 1000} seconds.`);
