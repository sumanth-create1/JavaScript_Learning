// another way to create a objct using constructor

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

function Student(fullname, enrollmentNo, branch, cgpa) {
    this.fullname = fullname;
    this.enrollmentNo = enrollmentNo;
    this.branch = branch;
    this.cgpa = cgpa;
}

const car1 = new Car("Ford", "mustang", 2000, "Red");
const car2 = new Car("Audi", "A4", 2016, "Black");

const student1 = new Student("Robert Patinson", `${"CS00"}`+ 1, "CSE", 9.0);
const student2 = new Student("Bruce wayne", `${"CS00"}`+ 2, "ECE", 9.9);

console.log(student1.fullname);
console.log(student1.enrollmentNo);
console.log(student1.branch);
console.log(student1.cgpa);

console.log(student2.fullname);
console.log(student2.enrollmentNo);
console.log(student2.branch);
console.log(student2.cgpa);

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

