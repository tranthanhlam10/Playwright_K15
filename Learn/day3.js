// Code chay tuan tu tu tren xuong duoi
let clientAge = 17 ;
if (clientAge < 18) {
    console.log("Khong ban");
}
if (clientAge <= 55) {
    console.log("Ban 1 ly");
}
// Neu 2 cau deu kien khong lien qua den nhau, thi cay cau 1 xong moi chay cau 2
// Chi su dung nested if else 2 cap, neu su dung toi cap thu 3 thi rat kho de hinh dung

//BitwiseOperator
// Neu de ten deu kien 1 minh thi la check undefiened
if(getFirstNum() != 0 & getSecondNum() != 0) {
    console.log("All number are not zero");
}

function getFirstNum(){
    console.log("Calling 1st method");
    return 0;
}

function getSecondNum(){
    console.log("Calling 2nd method");
    return 2;
}

//Hoisting in JavaScript
console.log(myVariable);
var myVariable = 1;

//Function
// Thoa man tinh don nhiem Single Reponsibility -> ham khi tao chi nen thuc hien 1 nhiem vu ma thoi
// Neu hon 1 li do de voa thay doi ham, thi no khong thoa man dieu kien tren
// Function Declaration -> Hoisting
let returnValue = functionName();
function functionName(){
    return 1;
}
console.log(returnValue);
// Function expression

// Function expression -> Not hoisting
const addNumber = function(firstNum, secondNum){
    return firstNum + secondNum;    
}

// Phu thuoc vao coding convention, khi chon cach declare nhu the nao cho phu hop
