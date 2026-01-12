function hello() {
  console.log("Hello World");

  // returning undefined silently
}

hello();

let msg = hello();
console.log(msg); // undefined

// Function Expression
const hellow = function () {
  console.log("Hello World");
};

// Named Function Expression
const hello1 = function hello(){
console.log("Hello World");
};

// Arrow Function
const hello2 = () =>{
    console.log("Hello World");
};

// Arrow Function in one line
const hello3 = () => console.log("Hello World");
const hello4 = () => 5;

const hello5 = (a,b) => a+b;
const hello6 = (a,b) => {
    a++;

    return a+b;
};

// to return object

const hello7 = (a,b) => {
    return {
        a: 5,
        b:6,
    }
};
//or
const hello8 = (a,b) => ({
        a: 5,
        b:6,
    });

//anonymous function 

function hello10(){
return function (){

    console.log("Hello World");
};

}