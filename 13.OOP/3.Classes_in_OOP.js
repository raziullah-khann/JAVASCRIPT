class BankAccount {
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance = 0) { //agar assign nahi karenge to undefined aayega
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const rakeshAccount = new BankAccount("Rakesh K", 1000);
const johnAccount = new BankAccount("John Doe");
rakeshAccount.address = "Rajkot"
rakeshAccount.deposit(3500);
johnAccount.deposit(3500);
johnAccount.withdraw(1200);
console.log(rakeshAccount);
console.log(johnAccount);
console.log(BankAccount.prototype);


//normal function will work hoisting
hello();
function hello() {
    console.log("Hello");
}
