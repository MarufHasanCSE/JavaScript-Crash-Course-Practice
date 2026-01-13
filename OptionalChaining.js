// Optional Chaining
const user = {
    id: 42,
    name: 'Alice',
    age: 30,
    education: {
        degree: 'Bachelor\'s',
        school: {
            name: 'Wonderland University',
        },
    },
};


console.log(user.education.school.name); // Output: Wonderland University

// Using optional chaining to safely access nested properties
console.log(user.education?.school?.name); // Output: Wonderland University
console.log(user.education?.school?.location); // Output: undefined
console.log(user.work?.company?.name); // Output: undefined