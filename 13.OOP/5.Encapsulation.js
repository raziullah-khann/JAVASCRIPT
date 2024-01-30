class BankAccount {
    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance = 0) { //agar assign nahi karenge to undefined aayega
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    set balance(amount) {
        if(isNaN(amount)){
            throw new Error('Amount is not a valid');
        }
        this.#balance = amount;
    }

    get balance(){
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount{

    constructor(customerName, balance) {
        super(customerName, balance);
        this.transactionLimit = 50000;
    }

    #calculateInterest(amount) {
        console.log('Calculating Interest');
    }

    takeBusinessLoan(amount) {
        //logic for business loan
        this.#calculateInterest(amount);
        console.log('Taking business Loan: ' + amount);
    };
}

const rakeshAccount = new CurrentAccount("Rakesh K", 45000);
// console.log(rakeshAccount);
// Private field '#balance' must be declared in an enclosing class
// rakeshAccount.#balance = 10000; //outside of class access
// rakeshAccount.#balance = 'Hello'; // invalid input

//after setter
// rakeshAccount.balance = 8000;
// rakeshAccount.setBalance("Hello");
// console.log(rakeshAccount);

//getter
// console.log(rakeshAccount.balance); //undefined
// console.log(rakeshAccount.getBalance());
console.log(rakeshAccount.balance);
rakeshAccount.takeBusinessLoan(40000);
console.log(rakeshAccount);
