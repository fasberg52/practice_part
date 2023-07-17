//PRACTICE_1 >>>>>>>>>>>>>>>>>>>

const numbers_0 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers_0) {
  if (number % 2 !== 0) {
    console.log(`PRACTICE_1 :  ${number}`);
  }
}

//PRACTICE_2 >>>>>>>>>>>>>>>>>>>

let numbers_fibo = 15;

const fibonachiArray = [];
let prev = 0;
let current = 1;
for (let i = 0; i < numbers_fibo; i++) {
  fibonachiArray.push(current);
  const next = prev + current;
  prev = current;
  current = next;
}
console.log(`PRACTICE_2 : ${fibonachiArray}`);

//PRACTICE_3 >>>>>>>>>>>>>>>>>>>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    //console.log(numbers[i]);
  }
}

//PRACTICE_3 with other solve
for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(`PRACTICE_3 : ${number}`);
  }
}
//PRACTICE_4 >>>>>>>>>>>>>>>>>>>>>
const numbers_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (number of numbers_2) {
  sum += number;
}
console.log(`PRACTICE_4 : ${sum}`);

//PRACTICE_6 >>>>>>>>>>>>>>>>>>>>>
const numbers_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let math = 1;
let trimArray = numbers_3.slice(3, 6);
for (const number of trimArray) {
  math *= number;
}
console.log(`PRACTICE_6 : ${math}`);

//PRACTICE_7 >>>>>>>>>>>>>>>
const users = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
users.splice(2, 4, 6);
console.log(`PRACTICE_7 : ${users}`);
