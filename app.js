//question 1

// const str = 'Hello, world';
// let reversedString = '';

// for (let i = str.length - 1; i >= 0; i--) {
//   reversedString += str[i];
// }

// console.log(reversedString);


//question 2 

const text = 'bano qabil';
const vowels = 'aeiouAEIOU';
let count = 0;

for (let i = 0; i < text.length; i++) {
  if (vowels.indexOf(text[i]) !== -1) {
    count++;
  }
}

console.log(`Number of vowels in "${text}" is: ${count}`);



// queston 3

// const str = 'hello world';

// const toArry = str.split(' ');

// toArry.map(item => {
//   const cv = item.charAt(0).toUpperCase() + str.slice(1);
//   console.log(cv);
// });


// question 4
// const str = 'civic';

// const rev = str.split('').reverse().join('');

// if (str === rev) {
//   console.log('its palindrome');
// } else {
//   console.log('its not palindrome');
// }


// question 5
// const arr = [1, -1, -7, 100, -100, 67];
// console.log(arr.filter(e=>e>0));

// question 06
// const array = [10, 20, 30, 40, 50, 30];
// const elementToFind = 30;
// const firstIndex = array.indexOf(elementToFind);

// if (firstIndex !== -1) {
//   console.log(`The first occurrence of ${elementToFind} is at index ${firstIndex}`);
// } else {
//   console.log(`The element ${elementToFind} is not found in the array`);
// }


// Question 7 
// const arr = ['1', '2', '3', '3', 4, '5', 3, '2', 1];
// const newArr = arr.filter((value, index) => arr.indexOf(value) == index);
// console.log(newArr);

//queston no 08
// function sortAscending(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
  
//   const array = [5, 3, 9, 1, 6, 9, 10];
//   const sortedAscending = sortAscending(array.slice());
//   console.log("Ascending ", sortedAscending);
  


//   function sortDescending(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] < arr[j + 1]) {
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
  
//   const sortedDescending = sortDescending(array.slice());
//   console.log("Descending", sortedDescending);
  


// question 09


// let number = 1;

// while (number <= 20) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
//   number++;
// }



// question 10



// function calculateFactorial(number) {
//     let factorial = 1;
//     let i = 1;
  
//     if (number < 0) {
//       return 1
//     }
  
//     do {
//       factorial *= i;
//       i++;
//     } while (i <= number);
  
//     return factorial;
//   }
  
//   const num = 5; 
//   const result = calculateFactorial(num);
//   console.log(`The factorial of ${num} is: ${result}`);


// question 11

// const person = {
//     name: 'John Doe',
//     age: 30,
//     email: 'john@example.com'
//   };
  
//   for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
//   }
  

// question 12

// const originalArray = [1, 2, 3, 4, 5];
// const doubledArray = [];

// for (const element of originalArray) {
//   doubledArray.push(element * 2);
// }

// console.log("Original Array:", originalArray);
// console.log("Doubled Array:", doubledArray);


//question 13

// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//       return `${number} is even.`;
//     } else {
//       return `${number} is odd.`;
//     }
//   }
  
//   // Example usage:
//   const num1 = 7;
//   const num2 = 12;
  
//   console.log(checkEvenOrOdd(num1)); // Output: "7 is odd."
//   console.log(checkEvenOrOdd(num2)); // Output: "12 is even."



// question 14


// function findMaxOfThree(num1, num2, num3) {
//     const max = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
//     return `The maximum of ${num1}, ${num2}, and ${num3} is: ${max}`;
//   }
  
//   // Example usage:
//   const a = 10;
//   const b = 5;
//   const c = 8;
  
//   console.log(findMaxOfThree(a, b, c)); 


// question 15

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return `${year} is a leap year.`;
//     } else {
//       return `${year} is not a leap year.`;
//     }
//   }
  
//   const yearToCheck = 2024;
//   console.log(isLeapYear(yearToCheck));
  
  
  


  