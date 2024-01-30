function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    //sabhi object ke liye same method alag memory le rha hai jabki iska koi kaam nahi h ye bas dusre property pe operation kar rha hai.

    // this.deposit = function(amount) { 
    //     this.balance += amount;
    // };

    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // };
}


//static way
//every object and property takes different memory
const rakeshAccount = new BankAccount("Rakesh K");
const johnAccount = new BankAccount("John Doe", 1000);
// console.log(rakeshAccount, jhonAccount);

BankAccount.prototype.test = "this is test";
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount;
}

rakeshAccount.deposit(5000);
johnAccount.deposit(3500);
johnAccount.withdraw(1000);
console.log(BankAccount.prototype);
console.log(rakeshAccount);
console.log(johnAccount);