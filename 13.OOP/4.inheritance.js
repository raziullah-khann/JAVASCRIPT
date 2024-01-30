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

class CurrentAccount extends BankAccount{
    
    constructor(customerName, balance) {
        super(customerName, balance);
        this.transactionLimit = 50000;
    }

    takeBusinessLoan(amount) {
        console.log('Taking business Loan: ' + amount);
    };
}

class SavingAccount extends BankAccount{

    constructor(customerName, balance) {
        super(customerName, balance);
        this.transactionLimit = 10000;
    }

    takePersonalLoan(amount) {
        console.log('Taking personal Loan: ' + amount);
    };
}

const rakeshAccount = new SavingAccount("Rakesh k", 500);
rakeshAccount.deposit(500);
rakeshAccount.withdraw(100);
rakeshAccount.takePersonalLoan(40000);
console.log(rakeshAccount);

// function BankAccount(customerName, balance=0){
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;

// }

// BankAccount.prototype.deposit = function(amount) {
//     this.balance += amount;
// }
// BankAccount.prototype.withdraw = function(amount) {
//     this.balance -= amount;
// }

// function CurrentAccount(customerName, balance=0){
//     BankAccount.call(this, customerName, balance); // parent constructor linking
//     this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype)

// CurrentAccount.prototype.takeBusinessLoan = function(amount) {
//     console.log('Taking business Loan: ' + amount);
// };

// function SavingAccount(customerName, balance=0){
//     BankAccount.call(this, customerName, balance); //parent.call(this, param1,param2,..) call is a static method, this poin karega saving account se jo bhi object banega
//     this.transactionLimit = 10000;
// }
// SavingAccount.prototype = Object.create(BankAccount.prototype)

// SavingAccount.prototype.takePersonalLoan = function(amount) {
//     console.log('Taking business Loan: ' + amount);
// };

// const rakeshAccount = new SavingAccount("Rakesh k", 500);
// rakeshAccount.deposit(500);
// rakeshAccount.withdraw(100);
// console.log(rakeshAccount.takePersonalLoan(40000));
// console.log(rakeshAccount);

