# Javascript Data Structures And Algorithms

This project will encapsulate my notes on Data Structures And Algorithms using JS.
You can find the code snippets in their individual folders. For explanations, you can browse through the README.md file.
The resources used can be found at the end of the README.md file.

## Big O Notation

(•ᴗ•) **What is Big O Notation?**

Big O Notation is a convenient way to describe the performance or complexity of an algorithm. It describes how the runtime of an algorithm grows as the inputs grow.

(•ᴗ•) **Why do we need something like this?**

Let's say, there are multiple valid solutions to a problem, and each of them uses a totally different approach. How do we decide which one is **better?**
Simply put, this is what the Big O Notation is all about. It is a way of comparing code and its performance to other pieces of code.

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

How does the runtime of an algorithm changes as the size of its input increases?

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

log2(8) = 3 -----> 2^3 = 8
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
- sort -> O(n\*log(n))
- forEach/map/filter/reduce -> O(n)

## Problem Solving: Approach and Patterns

(•ᴗ•) **Problem Solving Strategies**

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

**_Problem Solving Patterns_**

1. **Frequency Counter Pattern**

   This pattern uses objects or sets to collect values/frequency of values to avoid nested loops or O(n^2) operations with arrays and strings.
   This is useful when you have multiple inputs for an algorithm and you are comparing theses inputs with each other.

   **Example**
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

**Frequency Counter Exercise 1: Anagram**

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

**Frequency Counter Exercise 2: isSameFrequency**

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

**Frequency Counter Exercise 3: areThereDuplicates**

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
```

## Resources:

1.  "JavaScript Algorithms and Data Structures Masterclass" on Udemy by _Colt Steele_
2.  "How to Solve It - A New Aspect of Mathematical Method" by _G. Polya_
