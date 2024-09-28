import BankAccount from "./BankAccount";

export default class SavingAccount extends BankAccount {
  constructor(balance: number) {
    super(balance);
     
  }


  withdraw(amount: number): void {
    if (amount < 0 || amount === null) {
      console.log("Pls input new amount");
    }

    if (amount <= this.balance){
        console.log("You can withdraw a money in Saving Account!");
        console.log (this.balance - amount);
        this.balance -= amount; 
    }
    else {
        console.log("You can't withdraw a money !");
    }
  }
  deposit(amount: number): void {
    if((amount < 0) || (amount === null)){
        console.log("Pls input new amount");
    }
    else {console.log(  this.balance + amount);
        this.balance += amount;
     }


    }
  
  getBalance(): number {
    super.getHello(); // Làm để cho biết sự khá nhau về mặt bản chất của this và superr
    console.log("Recent Balance: " + this.balance);
    return this.balance;
  }
}