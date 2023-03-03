class People {
    name: string;
    renda?: number;

    constructor(name: string, renda?: number) {
        this.name = name;
        this.renda = renda;
    }

    sayHi(): string {
        return `${this.name} say hi!`;
    }
}

class accountBank {
    protected balance: number = 0;
    accountNumber: number;

    constructor(accountNumber: number) {
        this.accountNumber = accountNumber;
    }

    static returnBankNumber() {
        return 341;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(balance: number) {
        this.balance += balance;
    }
}

class accountPF extends accountBank {
    setBalance(balance: number): void {
        this.balance = balance * 2;
    }
}

const newAccount = new accountPF(1234567);
newAccount.accountNumber;
accountBank.returnBankNumber();