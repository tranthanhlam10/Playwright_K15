export default abstract class BankAccount {
  protected balance: number;

  get(): number {
    return this.balance;
  }
  set(balance: number): void {
    this.balance = balance;
  } 

  constructor(balance: number) {
    this.balance = balance;

  }
  abstract withdraw(amount: number): void;
  abstract deposit(amount: number): void;
  abstract getBalance(): number;
}

