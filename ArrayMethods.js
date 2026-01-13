// Array Methods
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const results = fruits.find((f) => f === "Orange");

console.log(results);

const results1 = fruits.findIndex ((f) => f === "Orange");

console.log(results1);

const results2 = fruits.filter ((f) => f === "Orange" || f === "Mango");

console.log(results2);
console.log(fruits);

//const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const results3 = fruits.slice(2,4);

console.log(results3);
console.log(fruits);
//const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const results4 = fruits.splice(2,4, "froto", "lichu");

console.log(results4);
console.log(fruits);

const results5 = fruits.concat("Fruits 1", "Fruits 2");

console.log(results5);
console.log(fruits);

const results6 = fruits.push("Fruits 3", "Fruits 4");

console.log(results6);
console.log(fruits);
const fruit = ["Banana","Apple", "Orange", "Lemon", "Apple", "Mango"];

const results7 = fruit.map((f) => f === "Apple");

console.log(results7);
console.log(fruit);

const numbers = [1, 2, 3, 4, 5];

const results8 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(results8);
console.log(numbers);

numbers.forEach((num) => console.log(num * 2));
console.log(numbers);

for(const num of numbers){
    console.log(num * 3);
}
console.log(numbers);

const name = "Maruf";

for(const n of name){
    console.log(n);
}   

const language = {
    name: "JavaScript",
    type: "Programming Language",
    year: 1995,
    creator : "Brendan Eich"
};

for(const prop in language){
    console.log(`${prop}: ${language[prop]}`);
}   