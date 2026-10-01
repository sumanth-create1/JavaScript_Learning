// objects in javascript

// this is how  we create objects in javascripts

const student1 = {
    firstName: "Satya",
    lastName: "Sumanth",
    enrollment: 1,
    branch: "CSE",
    sayHello: () => {console.log(`hey my name is ${student1.firstName} ${student1.lastName}`)},
}

const student2 = {
    firstName: "Robert",
    lastName: "Patinson",
    enrollment: 2,
    branch: "AI & ML",
    sayHello: () => {console.log(`hey my name is ${student2.firstName} ${student2.lastName}`)},
}

// console.log(student1.firstName);
// console.log(student1.lastName);
// console.log(student1.enrollment);
// console.log(student1.branch);
student1.sayHello();
student2.sayHello();

// console.log(student2.lastName);
// console.log(student2.enrollment);
// console.log(student2.branch);
// console.log(student2.firstName);