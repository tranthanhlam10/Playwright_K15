import BankAccount from "./BankAccount";

export default class CheckingAccount extends BankAccount {
  private minimumBalance: number;

   constructor(balance: number, minimumBalancee: number) {
     super(balance);
     this.minimumBalance = minimumBalancee;
  }

  withdraw(amount: number): void {
    if (amount < 0 || amount === null) {
      console.log("Pls input new amount");
    }

    if (this.balance - amount >= this.minimumBalance) {
      console.log("You can withdraw a money in Checking account !");
      console.log(this.balance - amount);
      this.balance -= amount;   
    } else {
      console.log("You can't withdraw a money in Checking account !");
    }
  }
  deposit(amount: number): void {
    if (amount < 0 || amount === null) {
      console.log("Pls input new amount");
    } else {
      console.log("You can deposit in checking account")
      console.log( this.balance + amount);
      this.balance += amount;

    }
  }

  getBalance(): number {
    this.getHello(); // Làm để cho biết sự khá nhau về mặt bản chất của this và superr
    console.log("Recent Balance: "+ this.balance);
    return this.balance;
  }
}
