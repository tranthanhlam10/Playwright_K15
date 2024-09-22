import BankAccount from "./BankAccount";
import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

const checkingAccount : BankAccount = new CheckingAccount(1000000, 50);
const savingAccount: BankAccount = new SavingAccount(100000);





checkingAccount.deposit(50000);
checkingAccount.withdraw(100000);
checkingAccount.getBalance();


savingAccount.deposit(10);
savingAccount.withdraw(20);
savingAccount.getBalance();



