// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y) {
    if( x > y) {
      return x;
    } else if( y > x ) {
      return y
    } else {
      return "These values are equal."
    }
 }
    // Your answer here
max(12, 108);


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(a, b, c) {
    if(a > b && a > c || a > b && b === c) {
      return a;
    } else if( b > a && b > c || b > c && c === a) {
      return b;
    } else if( c > a && c > b || c > a && a === b) {
      return c;
    } else {
      return "These values are equal.";
    }
}

maxOfThree(12, 40, 100);

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
    if( ( char === "a" ) ||
        ( char === "e" ) ||
        ( char === "i" ) ||
        ( char === "o" ) ||
        ( char === "u" )) {
      return true;
    } else {
      return false;
    }
}

isVowel("t");


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(high, low) {
  return high + low;
}

sum(3, 17);

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(one, two, three) {
  return (one + two + three) / 3;
}

avg(12, 1225, 74)

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string) {
  return string.length;
}

getLength("I love functions!!!");


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(big, small) {
  if( small > big ) {
    return true;
  }else {
      return false;
    }
  }

greaterThan(12, 100);

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(hello) {
  return "Hello, " + hello + "!";
}

greet("Indiana Jones");


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.

function madLib(name, adjective, verb, noun) {
  return name + " likes " + verb + " with " + adjective + " kinds of " + noun;
}



madLib("Bill", "creepy", "skipping", "lego");

// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
