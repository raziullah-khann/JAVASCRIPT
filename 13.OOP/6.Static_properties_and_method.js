class Config {
    static dbUser = 'username';
    static dbPassword = 'secret';
    static apiToken = 'abcd';
}
//in this case we dont need to make instance
console.log(Config.dbUser);




//increment
//utility function
class User {
    static id = 1;
    static cache = {
        1: 'some value',
    };
    constructor(name, age, income) {
        //jo normal property hoti hai vo instance me store ho jati hai.
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = User.id++;
    }


    //agar dono static hai to kaam karega.
    // this tabhi kaam karega jab hum static property ko static method se acces kar rahe hai.
    math() {
        console.log("Hello");
    }

    static checkCache() {
        console.log(this.cache);  
    }

    static hasInCache() {
        this.checkCache();
        //we can't directly call non static method in from a static method.
        const inst = new User();
        inst.math();
    }

    //we can make static block also
    //ye ek he baar call hoga jab hum koi static method call karenge pahli baar me call hoga
    static {
        console.log("I am static block");
    }

//ye jo static method and property hoti hai vo class ke upar store ho jaaati hai.
    static compareByAge(user1, user2) {
        return user1.age - user2.age;
    }

    static compareByIncome(user1, user2) {
        return user1.income - user2.income;
    }
}

const user1 = new User("Ram", 25, 5000);
const user2 = new User("John", 30, 10000);
console.log(user1==user2);
const user3 = new User("Rahul", 10, 70000);

// sort these object according age
const users = [user1,user2,user3];
users.sort(User.compareByAge);
console.log(users);

console.log(user1);
console.log(user2);
console.log(user3);


User.hasInCache();
// User.hasInCache();

Math.random(); //static method humko math class ka instance banane ki jarurat nahi hai
Object.hasOwnProperty();

// console.log(typeof Config);