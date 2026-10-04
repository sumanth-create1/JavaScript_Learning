// inheritance in java script

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating.`);
    }

    sleep(){
        console.log(`this ${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";
}

class Fish extends Animal{
    name ="Fish";
}

class Eagle extends Animal{
    name = "Eagle";
}

const rabbit = new Rabbit();
const fish = new Fish();
const eagle = new Eagle();


console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();

console.log(fish.alive);
fish.eat();
fish.sleep();

console.log(eagle.alive);
eagle.eat();
eagle.sleep();

