"use strict";
class account {
    constructor(accountNumber) {
        this.accountBalance = 0;
        this.accountNumber = accountNumber;
    }
}
class accountSalary extends account {
    Deposit(value) {
        this.accountBalance += value;
    }
}
class currentAccount extends account {
    constructor() {
        super(...arguments);
        this.transferFee = 0;
    }
    transfer(value, accountTarget) {
        accountTarget.accountBalance += (value - this.transferFee);
        return true;
    }
    ;
}
