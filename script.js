class User{
    static userCount = 0;

    constructor(username) {
        this.username = username;

        User.userCount++;
    }

    static getUserCount() {
        console.log(`there are ${User.userCount} are in online`);
    }

    sayHello() {
        console.log(`heyy my user name is ${this.username}`);
    }
}

const user1 = new User("Bruce wayne");
const user2 = new User("Robert Pattinson");
const user3 = new User("Tony stark");



user1.sayHello();
user2.sayHello();
User.getUserCount();