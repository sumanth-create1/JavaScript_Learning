// inheritance in java script

class Animal{
    static alive = true;

     static eat(){
        console.log(`This ${this.name} is eating.`);
    }

    static sleep(){
        console.log(`this ${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";

    static run() {
        console.log(`this ${this.name} is running.`);
    }
}

class Fish extends Animal{
    name ="Fish";

    static swim() {
        console.log(`this ${this.name} is swimming.`);
    }
}

class Eagle extends Animal{
    name = "Eagle";

    static fly() {
        console.log(`this ${this.name} is flying.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const eagle = new Eagle();


// using static key word in inheritance

console.log(Rabbit.alive);
Rabbit.eat();
Rabbit.sleep();
Rabbit.run();

// after this all three animals are alive....

// using static methods


console.log(Fish.alive);
Fish.eat();
Fish.sleep();
Fish.swim();

console.log(Eagle.alive);
Eagle.eat();
Eagle.sleep();
Eagle.fly();







