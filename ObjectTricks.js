
// Object Tricks 
const language = {
    name: "JavaScript",
    type: "Programming Language",
    year: 1995,
    creator : "Brendan Eich"
};

console.log(Object.keys(language));
console.log(Object.values(language));
console.log(Object.entries(language));

language.popularity = "High";
console.log(language);

const a = "Popularity";
language[a] = "Very High";
console.log(language);

language["version"] = "ES6";
console.log(language);

const b = "version"; 
const lang ={
    name: "Python",
    type: "Programming Language",
    year: 1991,
    creator : "Guido van Rossum",
    b
}
console.log(lang);
lang.b;
console.log(lang.b);