const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const results1 = [...fruits];

console.log(results1);
console.log(fruits);

results1.push("Grapes");

console.log(results1);
console.log(fruits);

const language = {
    name: "JavaScript",
    type: "Programming Language",
    year: 1995,
    creator : "Brendan Eich"
};

const langCopy = {...language};

console.log(langCopy);
console.log(language);

function sum(text, ...rest){
    console.log(text);
    console.log(rest);
    let total = 0;
    for(const num of rest){
        total += num;
    }
    return total;
}

const result = sum("The sum is:", 1,2,3,4,5);
console.log(result);