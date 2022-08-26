  //-----------------------------programs in anonymous function & IIFE--------------------------------//

// a.Print odd numbers in an array

var arr = [1, 2, 3, 5, 7, 79, 75, 2, 6, 9, 4];
(function () {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      console.log(arr[i]);
    }
  }
})();

// b.Convert all the strings to title caps in a string array

const mymsg = "a good quote make changes on you";
function titlecase(msg) {
  return msg
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join(" ");
}
console.log(titlecase(mymsg));

// c.Sum of all numbers in an array

const sum = function (arr) {
  if (arr.length < 1) return 0;
  return arr.pop() + sum(arr);
};
console.log(sum([25, 40, 74, 11]));

// d. Return all the prime numbers in an array

var newArray = [13, 23, 9, 30, 10];
var isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
var myPrimeArray = newArray.filter((element) => isPrime(element));
console.log(myPrimeArray);

//e.Return all the palindromes in an array

var palindrome = function (word) {
  let len = word.length;
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  let flip = end.split("").reverse().join("");
  return start === flip;
};
console.log(palindrome("radar"));
console.log(palindrome("redder"));
console.log(palindrome("window"));
console.log(palindrome("i did did i"));

//f.Return median of two sorted arrays of the same size

function medianarr(array1, array2) {
  var concat = array1.concat(array2);
  concat = concat.sort(function (a, b) {
    return a - b;
  });
  console.log(concat);
  var length = concat.length;

  if (length % 2 == 1) {
    //length is odd
    console.log(concat[length / 2 - 0.5]);
    return concat[length / 2 - 0.5];
  } else {
    //length is even
    console.log((concat[length / 2] + concat[length / 2 - 1]) / 2);
    return (concat[length / 2] + concat[length / 2 - 1]) / 2;
  }
}
array1 = [21, 25, 27];
array2 = [24, 26, 28];
medianarr(array1, array2);

//g.Remove duplicates from an array

const list = [
  1,
  2,
  3,
  1,
  2,
  5,
  8,
  "guvi",
  "geek",
  "guvi",
  "duplicate",
  "geek",
  "duplicate",
];
console.log(list);

function removedup(array) {
  return array.filter((el, index) => array.indexOf(el) === index);
}
console.log(removedup(list));

//h.Rotate an array by k times

function rotatearray(arr, k) {
  for (let i = 0; i < k; i++) {
    let temp = arr[0];
    for (let j = 0; j < arr.length; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = temp;
  }
  return arr;
}
let arr = [9, 10, 11, 12, 13];
k = 4;
console.log(rotatearray(arr, k));

//------------------------------programs in arrow functions----------------------------------------------//

//a.Print odd numbers in an array

var arr = [1, 2, 45, 5, 7, 79, 75, 2, 6, 9, 27];
(odds = () => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      console.log(arr[i]);
    }
  }
})();

//b.Convert all the strings to title caps in a string array

var string = "hi how are you";

var titlecaps = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

var result = (str) => str.split(" ").map(titlecaps).join(" ");

console.log(result(string));

//c.sum of all array element using arrow function

function sum(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  });
}
console.log(sum([25, 38, 74, 92]));

// d. Return all the prime numbers in an array

const newArray = [13, 23, 9, 30, 10];
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = newArray.filter((element) => isPrime(element));
console.log(myPrimeArray);

//e.Return all the palindromes in an array

const palindrome = (word) => {
  let len = word.length;
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  let flip = end.split("").reverse().join("");
  return start === flip;
};
console.log(palindrome("radar"));
console.log(palindrome("redder"));
console.log(palindrome("window"));
console.log(palindrome("i did did i"));
