# Javascript Data Structures And Algorithms

This project will encapsulate my notes on Data Structures And Algorithms using JS.
You can find the code snippets in their individual folders. For explanations, you can browse through the README.md file.

## Big O Notation

(•ᴗ•) **Why do we need something like this?**
Let's say, there are multiple valid solutions to a problem, and each of them uses a totally different approach. How do we decide which one is **better?**
Simply put, this is what the Big O Notation is all about. It is a way of comparing code and it's performance to other pieces of code.

- Provides us a precise vocabulary to talk about our code's performance.
- Useful for discussing trade-offs between different approaches.
- Useful for debugging: helps you identify where your code is slowing down/crashing, or finding parts that are inefficient.

(•ᴗ•) **But what does better mean?**
Faster?
More readable?
Less memory-intensive?
It is actually a balance of all. More readable is often what is sacrificed for the other two, but it can be better for maintainability if your code doesn't look like complete gibberish.

First, we will focus on time.
We will write 2 versions of a function that does the same thing:

```js
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
```

Let's compare the time both of these functions take:

```js
let t1 = performance.now();
addUpToV1(10000000000);
let t2 = performance.now();
console.log(`Time elapsed for V1: ${(t2 - t1) / 1000} seconds.`);

let t3 = performance.now();
addUpToV2(10000000000);
let t4 = performance.now();
console.log(`Time elapsed for V2: ${(t4 - t3) / 1000} seconds.`);
```

Although we will see significantly different elapsed times in between these 2 functions (V2 is significantly faster than V1), as you run it several times, you will see that for both versions, the time it takes changes with every function call. This brings us to this problem:

- Different machines will measure different times.
- The same machine will record different times with the same function call.
- For faster algorithms, speed measurements might not be precise enough for comparing. (The smallest interval of time that can be measured might not be good enough.)
- For slower algorithms, timing them manually might be really time consuming.

So how do we go through our code and talk about it in general terms about which code might be faster without having to time it?
Calculated time varies by the specifications of your computer or the mood of your computer that day, but it is always determined by the number of operations that has to be performed.
So let's count the number of simple operations the computer has to perform to get over with that function!

Dissection of addUpToV2(n): We have 1 multiplication(\*), 1 addition(+) and 1 division(/) -> Total: 3 operations.
(Whether n is a billion or 10, total operation number will not change in this function.)

Dissection of addUpToV1(n): We have n additions(+) and n assignments(=) coming from "total += i" and another set of n additions(+) and n assignments(=) coming from the for loop. Inside for loop, we are also making n comparisons in the "i <= n" line. Addition to that, we are assigning a value to a variable in "let total = 0;" and "let i = 1" parts, so there is 2 more operations. -> Total: 5n+2 operations.
(Total number of operations is directly proportional to n, so if n is 1, the total number of operations will be 7, if n is a billion, it will be 5 billion + 2.)
