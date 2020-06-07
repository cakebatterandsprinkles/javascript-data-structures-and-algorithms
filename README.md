# Javascript Data Structures And Algorithms

This project will encapsulate my notes on Data Structures And Algorithms using JS.
You can find the code snippets in their individual folders. For explanations, you can browse through the README.md file.
The resources used can be found at the end of the README.md file.

## Big O Notation

(•ᴗ•) **What is Big O Notation?**

Big O Notation is a convenient way to describe the performance or complexity of an algorithm. It describes how the runtime of an algorithm grows as the inputs grow.

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

(•ᴗ•) **Simplifying Big O, The Rule**

**_Constants don't matter:_**
O(2n) will simplify to O(n).
O(13n^2) will simplify to O(n^2).
O(500) will simplify to O(1) -> O(1) means constant runtime!

- _Arithmetic operations & variable assignments are constant!_
  O(100n+20) will simplify to O(n).
  O(5n^2 + 100n + 8) will simplify to O(n^2) -> n becomes too small when compared to n^2, so it can be neglected!

- _Accessing elements in an array(by index) or object(by key) is constant!_
- _In a loop, the complexity is the length of the loop **times** the complexity of whatever happens inside of that loop!_

(•ᴗ•) **Summing up Big O**

Big O notation can give us an understanding of the time and space complexity of an algorithm.
Big O doesn't care about precision, it cares about general trends.
The time and space complexity measured by Big O depends only on the algorithm, not the hardware used to run the algorithm. So the actual runtime of an algorithm will change between computers with different hardware, but the general trend will be the same.
n: simple operations a computer has to do for that algorithm
The big O of an algorithm is a function of "n" => O(f(n))

- f(n) can be linear (f(n) = n)
- f(n) can be quadratic (f(n) = n^2)
- f(n) can be constant (f(n) = 1)
- f(n) can be many things!

addUpToV2(n) described at the previous part has always 3 operations => it has a big O of 1, it means as the n grows, it is not reflected in the runtime. => **O(1)**

addUpToV1(n) described at the previous part has 5n+2 operations => it has a big O of n, it means as the n grows, runtime will also grow as a multiple of n => **O(n)**

**_Note:_** If a function has more than one for loops(not nested), the for loops will each have O(n). At the end, the function itself will have a O(n). But for example, if a function has a single nested for loop, it will have a O notation of O(n^2).

**_Note:_** You always get the O notation of the worst case scenario!

**_Note:_** The smaller, the better!

_Comparing Running Time Complexity in terms of Big O (O(f(n))):_
From best to worse: O(1) (_best!_ )-> O(logn) (_good!_ ) -> O(n) (_fair!_ ) -> O(nlogn) (_bad!_ ) -> O(n^c) -> O(c^n) -> O(n!) (_worst!_ )

**_Time Complexity_**

How does the runtime of an algorithm changes as the size of it's input increases?

**_Space Complexity_** (Space = memory)

How much additional memory do we need to allocate to run our algorithm?

_Auxiliary Space Complexity_: Refers to the space required by the algorithm, not including space taken up by inputs. This will be the term you will read about in the following text.

**_Space Complexity, The Rules_**

1. Most primitives (booleans, numbers, underfined, null) are constant space! They take the same amount of space.
2. Strings require O(n) space. (n = string length)
3. Reference types are generally O(n). (for arrays => n = array length, for objects => n = number of keys)

Example-1:

```js
function sum(arr) {
  let total = 0;
  for (let i = 1; i <= arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

Lets break up the space we need for this single sum function:

We have a variable named total and a variable named i. Other than these two variable declarations, we have nothing that takes up space. Of course a calculation is being made, but the space we need for that calculation is already reserved at the second line of the code.

This means this algorithm always requires constant space, no matter what the input is. So the big O for space complexity for this algorithm is O(1).

Example-2:

```js
function double(arr) {
  let newArr = [];
  for (let i = 1; i <= arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

In this example as the input length approaches infinity, the length of the array will be increasing directly proportionate to the length of the given array.
This means the big O for space complexity for this algorithm is O(n).

**_What is a logarithm? A very very basic explanation:_**

Simply put, a logarithm is the inverse of exponentiation.

log2(8) = 3  ----->  2^3 = 8
log2(value) = exponent -----> 2^exponent = value

(•ᴗ•) **Analyzing Performance of Arrays and Objects**

_An object_ is an unordered data structure consisting key-value pairs.

Big O of actions related to objects:
- Insertion -> O(1)
- Removal -> O(1)
- Access -> O(1)
- Search -> O(n)

Big O's of object methods:
- Object.keys -> O(n)
- Object.values -> O(n)
- Object.entries -> O(n)
- hasOwnProperty -> O(1)

_An array_ is an ordered data structure consisting values and each value has an index number that corresponds to it.

Big O of actions related to arrays:
- Insertion -> If you are inserting to the end of the array (push) it is O(1). If you insert an item to the beginning of an array (unshift), it becomes O(n), because you will be changing the indices of every item on that array.
- Removal -> If you are removing from the end of the array (pop) it is O(1). If you remove an item from the beginning of an array (shift), it becomes O(n), because you will be changing the indices of every item on that array.
- Access -> O(1)
- Search -> O(n)

Big O's of array methods:
- push -> O(1)
- pop -> O(1)
- shift -> O(n)
- unshift -> O(n)
- concat -> O(n)
- slice -> O(n)
- splice -> O(n)
- sort -> O(n*log(n))
- forEach/map/filter/reduce -> O(n)

## Problem Solving: Approach and Patterns

(•ᴗ•) **Problem Solving Strategies**

**_What is an algorithm?_**

An algorithm is a sequence of well-defined instructions to solve a specific problem or accomplish a certain task. 

**_Problem Solving Steps_**

1. Understand the problem
   
   To make sure you understand the problem correctly, ask yourself: 
   - Can you restate the problem in your own words?
   - What are the inputs that go into the problem?
     - integers?
     - floats?
     - very big numbers?
     - how many inputs?
     - strings?
     - arrays? etc.
   - What are the outputs that should come from the solution of that problem?
     - integer?
     - float?
     - string?
     - array? etc.
   - Can the outputs be determined from the inputs? In other words, do you have enough information to solve this problem?
     - If the problem needs two inputs and you get one, what should you do? Return undefined? Null? Give inputs default values?
   - How should I label the important pieces of data that are part of the problem? (What is the terminology that you should use, what should you call them?)

2. Explore Concrete Examples
   
   Coming up with examples can help you understand the problem better. 
   - Write down or think about two or three examples with an input and the output.
   - Progress to more complex examples
   - Explore examples with empty inputs
   - Explore examples with invalid inputs

    **Example**
    Task: Write a function which takes in a string and returns counts of each character in the string
    ```js
    charCount('aaaaaa'); // {a:4}
    charCount('hello'); // {h:1, e:1, l:2, o:1}
    // Should we include the characters that are bot in there? Like {a:1, b:0, c:0}
    // If we enter a string that includes spaces and numbers, should we account for them?

    ```
   
3. Break it down
   
4. Solve or Simplify
   
5. Refactor your solution
   

 ## Resources:

 1. "JavaScript Algorithms and Data Structures Masterclass" on Udemy by _Colt Steele_ 
 2. "How to Solve It - A New Aspect of Mathematical Method" by _G. Polya_
