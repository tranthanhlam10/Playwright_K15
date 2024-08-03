const readlineSync = require('readline-sync');
/**
 * {
    accountNumber: String,
    routingNumber: String,
    balance: Number
}
. Creating another Bank Account Object which clone from the previous one and update the accountNumber only . Put them into ann array call: bankAccounts

. Write a consolse interface app to:

allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
allow user to withdraw the money and avoid user to take more than current balance
Note: Strongly recommend to create functions to process each tasks
 * 
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
 * 
 */




// Create object
const BrandAccount1 = {
    accountNumber: "account001",
    routingNumber: "Basic",
    balance: 10000000
}

const BrandAccount2 = {
    accountNumber: "account002",
    routingNumber: "Classic",
    balance: 20000000
}

const BrandAccount3 = {
    accountNumber: "account002",
    routingNumber: "Classic",
    balance: 20000000
}

const bankAccounts = [BrandAccount1, BrandAccount2, BrandAccount3];

let index = null;
do{
    printMenu();
     index = readlineSync.question('Input:');
     index = parseInt(index);
    if ((index === 1 || index === 2) && typeof index === "number"){
        console.log("Your input is correct, continue to the app");
    } else if (index === 0 && typeof index === "number" ){
        console.log("Application closed");
    } else {
        console.log("Pls input again");
    }

    switch (index){
      
        case 1:
            let bankAccount = readlineSync.question('Input bank account: ');
            findAccountByAccountNumber(bankAccount, bankAccounts);
        case 2:
            let bankAccountUpdate = readlineSync.question('Input bank account need to update balance: ');
            const account = findAccountByAccountNumber(bankAccountUpdate, bankAccounts);
            updateBalance(account);
    }

}
while(index !=0 ) 



function printMenu(){
        console.log('=== Banking application===)');
        console.log('1. Find an account');
        console.log('2. Update balance');
        console.log('0. Exit');
    }

function findAccountByAccountNumber(accountNumber, bankAccounts) {

    for(let i = 0; i < bankAccounts.length; i++){
        if(bankAccounts[i].accountNumber === accountNumber ){
            console.log("Bank account is: ");
            console.log(bankAccounts[i]);
            return bankAccounts[i];
        }
    }
    console.log("Cannot find your bank account");
    return 0;
}

function updateBalance(bankAccount) {
   
    if(bankAccount.balance === 0){
        console.log("You cant not update balance");
        return 0;
    }
    let money = readlineSync.question('Input money to update: ');
    money = parseInt(money);
    if (money < 0){
        console.log("Pls input correct money");
        return 0;
    }
    if(bankAccount.balance - money >= 0 ){
        console.log("You can update your balance: ");
        console.log("Money draw: " + money);
        bankAccount.balance = bankAccount.balance - money ;   
        console.log("balance updated " + bankAccount.balance);
        return 1;
    } else {
        console.log("You cannot update your balance");
        return 0;
    }
}

  