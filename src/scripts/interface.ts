class account {
    accountNumber: number;
    accountBalance: number = 0;

    constructor(accountNumber: number) {
        this.accountNumber = accountNumber;
    }
}

class accountSalary extends account {
    Deposit(value: number) {
        this.accountBalance += value;
    }
}

interface ITransference {
    transfer: (value: number, accountTarget: account) => boolean;
    transferFee: number;
}

interface IExample {
    cnpj: number;
}

interface InewExample extends IExample {
    telefone: number;
}

class currentAccount extends account implements ITransference{
    transfer (value: number, accountTarget: account) {
        accountTarget.accountBalance += (value - this.transferFee);
        return true;
    };
    transferFee: number = 0;
}