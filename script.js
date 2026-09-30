const colors = ["red", "blue", "green", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// assign array elements to variables...............

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// Destructuring the values from Objects..

const person1 = {
    firstName: "Satya",
    lastName: "Sumanth",
    age: 21,
    job: "Software Engineer",
}

const person2 = {
    firstName: "Christian",
    lastName: "Bale",
    age: 40,
    job: "Batman",
}


const {firstName, lastName, age, job="unemployed"} = person1;

// using default values while deStructuring...

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// destructuring in function parameters 

function displayPerson({firstName, lastName, age, job}) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);

