const readLine = require("readline-sync");
// Lucky Number


// Tư duy trước, sau đo viet các hàm implement sau -> Đảm bảo được tính đơn nhiệm của hàm khi viết code
// Trong vong lap while, phai de cho vong lap thuc hien duoc 1 lan
let isPlaying =  true;
while(isPlaying){
    printGameMenu();
    let userOption = getUserOption();

    if (userOption == 0){
        isPlaying = false;
    } else if(userOption == 1){
       let randomNumber =  Math.floor(Math.random() * 10 + 1);
       console.log("So may man la" + randomNumber);
    } else {
        console.log("Nhap lui roi teo oi");
    }
}

console.log("Hen gap ban lan sau");


function printGameMenu(){
    console.log("\t===GamneMenu===");
    console.log("1. Generate random code");
    console.log("0. Exit");
}
function getUserOption(){
    return readLine.question("pls select an option: ");
}


const  randomNumber  =  generateRandomNumber();
let guessingTime = 1;

do {
    let userNum = Math.floor(Math.random() * 10 + 1);
    if (userNum == randomNumber){
        console.log("Hooray");
        break;
    }
    guessingTime++;
} while (guessingTime < 3){
    if (guessingTime > 3){
        console.log("Chu ban may man lan sau")
    }
}

function getUserNumber(){
    return readLine.question("Xin hay nhap so cua ban: ");
}

function generateRandomNumber(){
   return Math.floor(Math.random() * 10 + 1);
}
// Biến thể của while là do-while -> Biến thể của while, thực hiện ít nhất môt lần thì mới tiếp tục
// Có nghĩ là 2 vòng lập lồng nhau, vòng lập ngoài chạy 1 lần, thì vòng 2 sẽ chạy hết, và lập lại tuần hoàn
// switch case -> Tương tự như Java


// --- Kiểu dữ liệu object ----

// Object literal
// Value cua object la gi cung duoc
// Function nam trong object thi nam o phan huong doi tuong trong JS
let teo = {
    name: "Teo",
    'my age': 18

}

// Read
console.log(teo.name);

//Update
teo.name = "Ti teo";

// Destructure
const {name} = teo;
console.log(name);

//Delete - Chi delete gia tri cua object
delete teo.name;

let ti = {...teo};


// Minh chi don gian hieu la day la phep gan gia tri cua bien
let a = 1; 
let b = 2;
 a = b;
console.log(a);
console.log(b);
