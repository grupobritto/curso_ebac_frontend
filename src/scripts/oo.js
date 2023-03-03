"use strict";
class People {
    constructor(name, renda) {
        this.name = name;
        this.renda = renda;
    }
    sayHi() {
        return `${this.name} say hi!`;
    }
}
class accountBank {
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
    static returnBankNumber() {
        return 341;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(balance) {
        this.balance += balance;
    }
}
class accountPF extends accountBank {
    setBalance(balance) {
        this.balance = balance * 2;
    }
}
const newAccount = new accountPF(1234567);
newAccount.accountNumber;
accountBank.returnBankNumber();
