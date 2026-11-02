// const person = {
//     name: "Sponge Bob square Pants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["jellyfishing", "karate", "cooking"],
//     address: {
//         street: "121 conch street",
//         city: "London",
//         country: "Intl water"
//     }
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);
// console.log(person.address);


class Person{
    constructor(name, age, ...address)
    {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country)
    {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("SpongeBob squarePants", 30, "121 conch street", 
                                                        "Bikini Bottom",
                                                        "Intl Water");
console.log(person1.name);
console.log(person1.age);
console.log(person1.address);