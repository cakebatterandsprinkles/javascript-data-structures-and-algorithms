# Javascript Data Structures And Algorithms

This project encapsulates my notes on Data Structures And Algorithms using JS.

You can find the code snippets and test files in their individual folders.

For explanations, you can browse through the README.md file.
The resources used can be found at the end of the README.md file.

## Table of Contents

- [Big O Notation](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#big-o-notation)
  - [What is Big O Notation?](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#what-is-big-o-notation)
  - [Big O Complexities of some algorithms & data structures](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#big-o-complexities-of-some-algorithms-data-structures)
  - [Space and Time Compexity](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#space-and-time-complexity)
- [Problem Solving: Approach And Patterns](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#problem-solving-approach-and-patterns)
  - [Problem Solving Strategies](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#%E1%B4%97-problem-solving-strategies)
  - [Problem Solving Patterns](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#problem-solving-patterns)
    - [Frequency Counter Pattern](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#1-frequency-counter-pattern)
      - [Anagram](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#frequency-counter-exercise-1-anagram)
      - [isSameFrequency](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#frequency-counter-exercise-2-issamefrequency)
      - [areThereDuplicates](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#frequency-counter-exercise-3-arethereduplicates)
    - [Multiple Pointers Pattern](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#2-multiple-pointers-pattern)
      - [findSumZero](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#example-findsumzero)
      - [countUniqueValues](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#multiple-pointers-exercise-1-countuniquevalues)
      - [averagePair](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#multiple-pointers-exercise-2-averagepair)
      - [isSubsequence](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#multiple-pointers-exercise-2-issubsequence)
- [Resources](https://github.com/cakebatterandsprinkles/javascript-data-structures-and-algorithms#resources)

## Big O Notation

### (•ᴗ•) What is Big O Notation?

We can describe the efficiency of an algorithm in terms of:

1. The time it takes to do the work
2. The amount of memory it uses
3. The amount of secondary storage space it needs

The performance of a program also depends on the capabilities of the computer it is running on.

Big O Notation describes how the time taken, or the memory used by a program scales with the amount of data it has to work on. (Common sense tells us that a problem takes longer when there is more data to work on. But it is not necessarily true.)

Big O describes the 'complexity' of a program.

### (•ᴗ•) Why do we need something like this?

Let's say, there are multiple valid solutions to a problem, and each of them uses a totally different approach. How do we decide which one is **better?**
Simply put, this is what the Big O Notation is all about. It is a way of comparing code and its performance to other pieces of code.

- Provides us a precise vocabulary to talk about our code's performance.
- Useful for discussing trade-offs between different approaches.
- Useful for debugging: helps you identify where your code is slowing down/crashing, or finding parts that are inefficient.

### (•ᴗ•) But what does better mean?

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

### (•ᴗ•) Big O Complexities of some algorithms & data structures

1. **Linear Search (sequential search)**

- An unordered list is searched for a particular value and each value on the list is compared to a target value.
- This is a brute-force approach and is usually implemented with a simple loop.
- There is a nice and simple relationship between the amount of data and the time it is going to take.

_The time taken is directly proportional to the amount of data._ For n data items, the time taken is equal to some constant multiplied by n. The constant itself will depend on the capabilities of the computer it is running on.

The big O time complexity: **Linear (O(n))**

2. **Stack**

- In a stack data structure, items are pushed onto and popped off the top of a stack.
- A stack might include a peak operation, which looks at the top item without removing it.
- A stack is also known as _Last In First Out (LIFO)_ data structure.
- Usually implemented with an array and a pointer to the top item.
- It takes a certain amount of time to push an item to the top of the stack. If we double the amount of data, it takes exactly the same amount of time. Removing an item from the top of the stack also take a certain amount of time. Removing an item from the top of a stack is independent from the amount of data it holds.

The big O time complexity: **Constant (O(1))**

3. **Bubble Sort**

Before we talk about this, lets briefly review a mathematical principle called **"dominant term"** in an expression.

An algorithm working on a data structure of size n might take 5n³ + n² + 2n + 6 steps. The larger n becomes, the less significant the other numbers become. So here, the biggest game changer is 5n³, so we ignore everything except that. We can also ignore constants, constants are still very unimportant next to n³. So the big O time complexity of this algorithm is **Cubic (O(n³))**.

- Bubble sort sorts a list of items into numeric or alphabetical order. It scans a list and compares values and swaps their orders if necessary. For n items, the list has to be scanned n-1 times.
- If you double the amount of data, it will take more than twice as long time. Doubling the amount of data actually quadruples the time taken. If we triple the amount of data, we increase the time taken by a factor of nine.
- For n data items, a simple implementation performs (n-1) x (n-1) operations. This can be written n² - 2n + 1, and the dominant term is n².

The big O time complexity: **Quadratic (O(n²))**

**Enhanced Bubble Sort**

In a normal bubble sort algorithm, the largest number will be in correct position after the first pass. If the inner loop ignores the correctly positioned items, it can get shortened with every pass.

For this bubble sort algorithm, the number of operations that are going to be performed will be: (n-1) + (n-2) + (n-3) + ... + 3 + 2 + 1. This can be shown as (n² - n)/2. This reduces the time taken by 50%, but the dominant term is still n². So even it is enhanced, it still has quadratic (O(n²)) complexity.

**Alternative Enhanced Bubble Sort**

If the inner loop is no longer performing any swaps, the data must be in correct order. So you could check for swaps with a boolean variable, and we can force exit the sorting algorithm when there is no more swaps to do.

Best case, data is already sorted and the inner loop only runs once. So the best case has linear complexity (O(n)). Worst case, data is in reverse order and every item has to be swapped. The worst case scenerio has quadratic complexity (O(n²)). In big O, we are always interested in the worst scenerio.

Before we move on, let's discuss another important mathematical concept: logarithms.

**Logarithms**

Logarithms were discovered by a mathematician named John Napier in the 1500's. Just like the substraction is the inverse of addition, or division is the reverse of multiplication, logarithms are the inverse of exponentiation.

log₂(8) = 3 (base 2 log of 8 is equal to 3) -----> 2³ = 8 (2 to the power of 3 is 8. 2 is the base, 3 is the exponent.)
log₂(value) = exponent -----> 2^exponent = value

The base can be any number, but in computer science we generally work with base 2 logs.

4. **Binary Search**

A binary search is used to search an ordered list for a particular value. It has a divide and conquer approach. Target value is compared with the middle value, then half of the list is discarded until the target is found. This method is very efficient for large, sorted lists. This is also a recursive approach, because we are repeatedly solving smaller and smaller versions of the same problem.

The big O time complexity: **Logarithmic (O(log n))**

5. **Merge Sort**

Sorts the data in a list. It has a divide and conquer approach. Works by splitting each list into sublists, each of them containing 1 item, therefore each sublist is sorted. It merges the sublists by 2, again sorting as it merges. At the end, it results with a single sorted list.

The big O time complexity: **Linearithmic (O(n log n))**

![Big O notation chart](./images/bigOchart.png)
_Big O Time Complexity Graph. Credit: Huang, D. (2018, January 1). Javascript — Algorithm_

Other than the complexities explained here, there are 2 more:

1. Polynomial: O(n^k)

Time taken is proportional to the amount of data raised to the power of a constant. (n: data size, k: constant)

2. Exponential: O(k^n)

Time taken is proportional to a constant raised to the power of the amount of data. (n: data size, k: constant)

### (•ᴗ•) Simplifying Big O, The Rule

**_Constants don't matter:_**
O(2n) will simplify to O(n).
O(13n^2) will simplify to O(n^2).
O(500) will simplify to O(1) -> O(1) means constant runtime!

- _Arithmetic operations & variable assignments are constant!_
  O(100n+20) will simplify to O(n).
  O(5n^2 + 100n + 8) will simplify to O(n^2) -> n becomes too small when compared to n^2, so it can be neglected!

- _Accessing elements in an array(by index) or object(by key) is constant!_
- _In a loop, the complexity is the length of the loop **times** the complexity of whatever happens inside of that loop!_

### (•ᴗ•) Summing up Big O

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

### Space And Time Complexity

We can use the Big O notation to describe the time or spca complexity of an algorithm.

**_Time Complexity_**

Answers this question: How does the runtime of an algorithm changes as the size of its input increases?

_Comparing Running Time Complexity in terms of Big O (O(f(n))):_
From best to worse: O(1) (_best!_ )-> O(logn) (_good!_ ) -> O(n) (_fair!_ ) -> O(nlogn) (_bad!_ ) -> O(n^c) -> O(c^n) -> O(n!) (_worst!_ )

**_Space Complexity_** (Space = memory)

How much additional memory do we need to allocate to run our algorithm?

_Auxiliary Space Complexity_: Refers to the space required by the algorithm, not including space taken up by inputs. This will be the term we will be referring to when we say space complexity in the following text.

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
- sort -> O(n\*log(n))
- forEach/map/filter/reduce -> O(n)

## Problem Solving: Approach and Patterns

### (•ᴗ•) **Problem Solving Strategies**

**_What is an algorithm?_**

An algorithm is a sequence of well-defined instructions to solve a specific problem or accomplish a certain task.

**_How do you improve your problem solving abilities?_**

1. Understand the steps that lead to problem solving.
2. Master common problem solving patterns.

(•̀ᴗ•́)و ̑̑ _Let's explore both of them!_

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
   charCount("aaaaaa"); // {a:4}
   charCount("hello"); // {h:1, e:1, l:2, o:1}
   // Should we include the characters that are bot in there? Like {a:1, b:0, c:0}
   // If we enter a string that includes spaces and numbers, should we account for them?
   // Do we store uppercases and lowercases separately? Do we ignore casing?
   ```

3. Break it down

   - Explicitly write out the steps you need to take. Make comments to guide yourself through the solution, like little steps. (Pseudocode, yay!) This forces you to think about your code before you write it so you are not just winging it.
   - This also helps you to clear any misunderstandings before you dive in.

   Example at the previous section continued:

   ```js
   // We decided to count the numbers as individual characters, omit spaces and other special characters and lowercase the entire string.

   function charCount(str) {
     // create an  object to return at the end of this function
     // loop over the string
     // if a character is a number/letter AND a key in the object, add one to count.
     // if a character is a number/letter AND not in our object, add it and set its value to 1.
     // if a character is something else (space, question mark, etc.) don't do anything.
     // return the object
   }
   ```

4. Solve or Simplify

   - Solve the problem if you can.
   - Otherwise, find the main difficulty in what you're trying to do.
   - Temporarily ignore that part.
   - Then incorporate that difficult part back in.

     Example at the previous section continued:

   ```js
   function charCount(str) {
     // create an  object to return at the end of this function
     var result = {};
     // loop over the string
     for (let i = 0; i < str.length; i++) {
       let char = str[i].toLowerCase();
       // if a character is something else (space, question mark, etc.) don't do anything.
       // if a character is a number/letter AND a key in the object, add one to count.
       // if a character is a number/letter AND not in our object, add it and set its value to 1.
       // For checking if a character is alphanumeric, you can use ASCII codes, regular expressions or predefined arrays.
       if (/[a-z0-9]/.test(char)) {
         if (result[char] > 0) {
           result[char]++;
         } else {
           result[char] = 1;
         }
       }
     }
     // return the object
     return result;
   }
   ```

5. Refactor your solution

There is rarely a single solution to a problem.

- Can you talk about your code without any problems?
- Can you get to the result differently?
- Can you understand your code at a glance?
- Can you use the result/method for solving another problem?
- Can you improve the performance of your code? (You can identify poorly performing things, like nested loops, and try to avoid those.) -
- Can you think of other ways to make your code better? (If you are working for a company, does your code follow company guidelines? Does it follow the best practices of the language? Is the spacing consistent?)
- How have other people solved this problem?

  _What can we refactor in this code?_ - We can do a for-of loop to avoid working with i. - Conditionals can be done in a single line. - Although regular expressions are a good way of finding certain patterns (like a credit card number, phone number, addresses, url, etc.) in a given input, they have a disadvantage: the performance of regular expressions can vary depending on the browser you are using. So it might be a bit better to use ASCII codes. Point proven [here](https://jsperf.com/alphanumeric-charcode-vs-regexp).

      Example at the previous section refactored:

  ```js
  function charCount(str) {
    var result = {};
    for (let char of str) {
      if (isAlphaNumeric(char)) {
        char = char.toLowerCase();
        result[char] = ++result[char] || 1;
      }
    }
    return result;
  }

  function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
    return true;
  }
  ```

### **_Problem Solving Patterns_**

#### 1. **Frequency Counter Pattern**

This pattern uses objects or sets to collect values/frequency of values to avoid nested loops or O(n^2) operations with arrays and strings.
This is useful when you have multiple inputs for an algorithm and you are comparing theses inputs with each other.

**Example: isMultiplied**

Write a function called isMultiplied which accepts two arrays. This function should return true if every value in the array has a correspoding value that is multiplied by 2 in the second array given. The frequency of values must be the same.

```js
isMultiplied([1, 2, 3], [4, 2, 6]); //true
isMultiplied([1, 2, 3], [4, 9]); //false
isMultiplied([2, 2, 3], [6, 6, 4]); //false (frequency gone wrong)
```

First, true but not the least effective solution:

```js
// First solution:
function isMultiplied => (arr1, arr2) = {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] * 2);
    if (correctIndex === -1) {
      return false;
    } else {
      arr2.splice(correctIndex, 1)
    }
  }
  return true;
}
```

The first solution is an ineffective solution because it has O(n^2). Not just the for loop, but indexOf also loops inside the second array to find the correctIndex, so it has nested loops.

Let's try it without the nested loops:

```js
// Second solution:
function isMultiplied => (arr1, arr2) = {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for(let key in frequencyCounter1) {
    if(!(key * 2) in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter2[key * 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
```

The second solution is more effective than the first one, because it just has 3 subsequent loops (but not a nested one!) and has O(3n), which will simplify as O(n).

#### **Frequency Counter Exercise 1: Anagram**

Write a function that takes two strings to determine if the second string is an anagram of the first. (An anagram is a word, phrase or name formed by rearranging the letters of another. Example: 'cinema' and 'iceman' are anagrams.)

```js
// Solution 1: (Has a time complexity of O(n))
function isAnagram1(str1, str2) {
  // determine if they have the same length, if not, return false.
  if (str1.length !== str2.length) {
    return false;
  }
  // make a frequency counter for str1
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let letter of str1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  // make a frequency counter for str2
  for (let letter of str2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }
  // loop over frequencycounter1 to see if it has the same amount of every letter in frequencyCounter2, if not return false
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

// Solution 2: (Also has a time complexity of O(n))
function isAnagram2(str1, str2) {
  // determine if they have the same length, if not, return false.
  if (str1.length !== str2.length) {
    return false;
  }
  // make a frequency counter for str1
  let frequencyCounter = {};
  for (let letter of str1) {
    frequencyCounter[letter]
      ? (frequencyCounter[letter] += 1)
      : (frequencyCounter[letter] = 1);
  }

  // loop over str2, see if you can find all the letters in str2 as keys in frequencyCounter object. If it is there, subtract 1 from its value.
  for (let key of str2) {
    if (!frequencyCounter[key]) {
      return false;
    } else {
      frequencyCounter[key] -= 1;
    }
  }
  return true;
}

// Solution 3: (Also has a time complexity of O(n))
// This time, we are going to think about edge cases and set some rules regarding those.
function isAnagram3(str1, str2) {
  // All the special characters including spaces should be excluded from the string.
  // Numbers should also be kept like letters.
  // Capital letters should be converted to lowercase.
  let correctedStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  let correctedStr2 = str2.replace(/[^\w]/g, "").toLowerCase();
  // determine if they have the same length, if not, return false.
  if (correctedStr1.length !== correctedStr2.length) {
    return false;
  }
  // make a frequency counter for str1
  let frequencyCounter = {};
  for (let letter of correctedStr1) {
    frequencyCounter[letter]
      ? (frequencyCounter[letter] += 1)
      : (frequencyCounter[letter] = 1);
  }

  // loop over str2, see if you can find all the letters in str2 as keys in frequencyCounter object. If it is there, subtract 1 from its value.
  for (let key of correctedStr2) {
    if (!frequencyCounter[key]) {
      return false;
    } else {
      frequencyCounter[key] -= 1;
    }
  }
  return true;
}

// Solution 4:
// This time, we are going to use a helper function to get rid of the characters we don't intend to use and take a totally different approach.
// This solution is less effective than solution 1 & 2 & 3, because it has a time complexity of O(n\*log(n)).
function isAnagram4(str1, str2) {
  return modifyString(str1) === modifyString(str2);
}

function modifyString(string) {
  // All the special characters including spaces should be excluded from the string.
  // Numbers should also be kept like letters.
  // Capital letters should be converted to lowercase.
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
```

#### **Frequency Counter Exercise 2: isSameFrequency**

Write a function that compares two positive integers and finds out if the two numbers have the same frequency of digits.

```js
// Solution: (Has a time complexity of O(n))
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
```

#### **Frequency Counter Exercise 3: areThereDuplicates**

Write a function that accepts an unknown number of arguments and checks whether there are any duplicates among the arguments that are passed.

```js
// Solution 1: (Time complexity: O(n), Space complexity: O(n))
function areThereDuplicates1(...args) {
  // Create a frequeny counter object
  let frequencyCounter = {};
  for (let arg of args) {
    frequencyCounter[arg] = (frequencyCounter[arg] || 0) + 1;
  }

  // Loop over the counter object to see if there are any values > 0.
  for (let arg of args) {
    if (frequencyCounter[arg] > 1) {
      return true;
    }
  }

  return false;
}

// Solution 2: (Time complexity: O(n), Space complexity: O(n))
function areThereDuplicates2(...args) {
  return new Set(args).size !== args.length;
}
```

#### 2. **Multiple Pointers Pattern**

This is very efficient for solving problems with minimal space complexity.
Usually we are searching for something that meets a condition in a given input. Then we create two referance points, for example one at the end and one in the beginning and move them to the middle until we find what we are looking for.

#### **Example: findSumZero**

Write a function called findSumZero which accepts a _sorted_ array of integers. This function should find the _first_ pair where sum is 0, and return them inside an array. If the condition is not met, it should return undefined.

```js
// it should be like this:
findSumZero([-2, -1, 0, 1, 2]); // [-2, 2]
findSumZero([-4, 0, 1, 2, 3]); // undefined

// Solution 1: (Time Complexity: O(n^2), Space Complexity: O(1))
// This is very inefficient due to the nested loops.
function findSumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Solution 2: (Time Complexity: O(n), Space Complexity: O(1))
// This is the solution using multiple pointers pattern:
function findSumZero2(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === 0) {
      return [arr[start], arr[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
}
```

#### **Multiple Pointers Exercise 1: countUniqueValues**

Write a function which accepts a _sorted_ array and return the number of unique values in that array. There can be negative numbers in the initial array.

```js
// Solution 1:

function countUniqueValues1(arr) {
  return new Set(arr).size;
}

// Solution 2: (Time Complexity: O(n))

function countUniqueValues2(arr) {
  // if arr.length === 0, return 0
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
```

#### **Multiple Pointers Exercise 2: averagePair**

Write a function which accepts a _sorted_ array of integers and a target average and determine if there is a pair of values in the array where the average of the pair equals target average. There can be multiple pairs that match the target average.

```js
// Solution 1: (Time Complexity: O(n^2), Space Complexity: O(1))

function averagePair1(arr, num) {
  // if arr.length === 0, return 0
  if (arr.length === 0) {
    return false;
  }
  let i = 0;
  while (i < arr.length) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) j++;
      if ((arr[i] + arr[j]) / 2 === num) return true;
    }
    i++;
  }
  return false;
}

// Solution 2: (Time Complexity: O(n), Space Complexity: O(1))

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
```

#### **Multiple Pointers Exercise 2: isSubsequence**

Write a function which accepts a two strings and determines whether the characters in the first string form a subsequence of characters in the second string. In other words, the function should check whether the first string appears anywhere inside the second string.

```js
// Solution 1:

function isSubsequence1(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// Solution 2:

function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
```

#### 3. **Sliding Window Pattern**

This pattern uses a window from one position to another. Depending on a certain condition, this window can get smaller or bigger. This is really useful when we have an array or a string and we're looking for a continuous subset of that data.

#### **Example: maxSubarraySum**

Write a function that takes an array of integers and a positive number (n) that calculates the maximum sum of n consecutive elements in the given array.

```js
function maxSubarraySum(arr, num) {}
```

## Resources:

1.  "JavaScript Algorithms and Data Structures Masterclass" on Udemy by _Colt Steele_
2.  "How to Solve It - A New Aspect of Mathematical Method" by _G. Polya_
3.  "Computer Science" channel by [Kevin Drumm](https://www.youtube.com/c/KevinDrumm/videos)
