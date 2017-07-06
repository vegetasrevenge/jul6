// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write an example of using the function.

function max(num1, num2){
    if (num1 > num2){
      return num1;
  } else
      return num2;
}

result = max(3,2);

console.log(result);



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
      return num1;
  } else if (num2 > num1 && num2 > num3) {
      return num2;
  } else
      return num3;
}

result = maxOfThree(3, 1, 2);

console.log(result);

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
      return true;
  } else
      return false;
}

result = isVowel('c');

console.log(result);


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(num1, num2){
  return (num1 + num2);
}

result = sum(1, 2);

console.log(result);



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num1, num2, num3){
  return ((num1 + num2 + num3)/3);
}

result = avg(3, 3, 3);

console.log(result);



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(word){
  return(word.length);
}

result = getLength('Supercalifragilisticexpealidocious');

console.log(result);


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1, num2){
  if (num2 > num1) {
    return true;
  } else
  return false;
}

result = greaterThan(3, 1);
console.log(result);



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
  return ('Hello, ' + name + "!");
}

result = greet('Casey');
console.log(result);



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.


function madLib(word1, word2, word3, word4){
  return ('Silly ' + word1 + ' sold ' + word2 +  ' by the ' + word3 + ' ' + 'in ' + word4 + '.')
}


result = madLib('Sally', 'Seashells', 'Seashore', 'September')
console.log(result);
