class Animal{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move() {
        console.log(`this ${this.name} is moving at a speed of ${speed}`);
    }
}

class Rabbit extends Animal{
    constructor(name , age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`this ${this.name} is moving at a speed of ${this.runSpeed} km/hr`);
    }
}

const rabbit = new Rabbit("rabbit", 1 , 10);

rabbit.run();
console.log(`${rabbit.name} age is ${rabbit.age}`)