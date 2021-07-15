class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return JSON.stringify(accountFirst) === JSON.stringify(accountSecond);
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    credit(amount) {
        this.balance = this.balance + amount;
        return this.balance;
    }

    debit(amount) {
        if (amount < this.balance) {
            this.balance = this.balance - amount;
            return this.balance;
        }
        return 'Amount exceeded balance';
    }

    transferTo(account, amount) {
        if (amount < this.balance) {
            this.balance = this.balance - amount;
            const accountTwoBalance = account.balance + amount;
            return accountTwoBalance;
        }
        return 'Amount exceeded balance';
    }

    toString() {
        JSON.stringify(this);
    }


}

const account1 = new Account(23, 'Gohar', 6789);
const account2 = new Account(23, 'Gohar', 0);

console.log(account1.transferTo(account2, 34));

console.log(Account.identifyAccounts(account1, account2));