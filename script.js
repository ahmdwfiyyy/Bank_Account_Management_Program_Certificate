class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    return "Deposit amount must be greater than zero.";
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    return "Insufficient balance or invalid amount.";
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = [];
    for (const transaction of this.transactions) {
      if (transaction.type === "deposit") {
        deposits.push(transaction.amount);
      }
    }
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = [];
    for (const transaction of this.transactions) {
      if (transaction.type === "withdraw") {
        withdrawals.push(transaction.amount);
      }
    }
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

const myAccount = new BankAccount();

myAccount.deposit(500);
myAccount.deposit(250);
myAccount.withdraw(100);
myAccount.withdraw(50);
myAccount.deposit(75);

console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
