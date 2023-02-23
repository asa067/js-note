/* CRUD in js */

//Create and Add
const numbers = [1, 2, 3];
console.log(numbers);
// Add an element to the end of the array
numbers.push(4); // [1, 2, 3, 4]
// Add an element to the beginning of the array
numbers.unshift(0); // [0, 1, 2, 3, 4]

//Read
const firstNumber = numbers[0]; // 0
// Access the second element in the array
const secondNumber = numbers[1]; // 1

//Update
numbers[0] = 1;   //modify by index

//Delete
//remove the last element
numbers.pop();
console.log(numbers);
// Remove the first element
numbers.shift();
console.log(numbers);
// Remove the element at index 1 from the array
numbers.splice(1, 2);     //1:start index; 2: number of element
console.log(numbers);

//splice() method
//Adding elements with splice
numbers.push(2);
numbers.splice(1, 0, 5, 6, 7, 8); // [1, 2, 5, 6, 3, 4]
console.log(numbers);
//Removing elements with splice
numbers.splice(2, 1);
console.log(numbers);
//Replacing elements with splice
numbers.splice(1, 2, 6);
console.log(numbers);