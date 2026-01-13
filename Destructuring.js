// Destructuring Assignment
const user = {
    id: 42,
    name: 'Alice',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Wonderland'
    }
};

const { id } = user;
console.log(id); // Output: 42

const { name, age } = user;
console.log(name); // Output: Alice
console.log(age);  // Output: 30
const { address: { street } } = user;
console.log(street); // Output: 123 Main St

// default values on destructuring

const { address: { zipCode} = {} } = user;
console.log(zipCode); // Output: 00000