// Nullish Coalescing Operator

let lang = null;

console.log(lang ?? "javascript"); // Output: "javascript"

lang = "python";

console.log(lang ?? "javascript"); // Output: "python"

let count = 0;

console.log(count ?? 10); // Output: 0

count = undefined;

console.log(count ?? 10); // Output: 10

count = null;

console.log(count ?? 10); // Output: 10

count = 5;

console.log(count ?? 10); // Output: 5

let name = "";

console.log(name ?? "Guest"); // Output: ""

name = null;

console.log(name ?? "Guest"); // Output: "Guest"

let langs = false;
let lang1 = true;
console.log(langs ?? "javascript"); // Output: false
console.log(langs || "javascript"); // Output: "javascript"
console.log(lang1 && "javascript"); // Output: "javascript"