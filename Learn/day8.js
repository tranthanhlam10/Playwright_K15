
// Giá trị của index, array khi sử dụng cách hàm built in trong mảng thì nó ngầm hiểu là mình truyền index và array trong hàm
const isEvenNumber = function(value, index, array){
    return (value%2 === 0 )
}


const convertToEvenNumber = function(value, index, array){
    if(isEvenNumber(value)){
        return value;
    } else {
        value ++;
    }
}

const sortNumbersASC = function(firstValue, secondValue){
    return firstValue - secondValue;
}


// cung cap gia tri thuc thi minh goi la argument
const sortNumbersDESC = function(firstValue, secondValue){
    return  secondValue - firstValue;
}

// sort String
let myString = ['B', 'C', 'A'];
myString = myString.sort();

console.log(myString); 
myString = myString.reverse();

console.log(myString);  

// sort Number - Khi sort number ma khong truyen logic gi vao, thi ham sort se chuyen thanh string roi sorrt
let myString2 = [100, 22,19];
myString2 = myString2.sort(sortNumbersASC);
console.log(myString2);
myString2 = myString2.sort(sortNumbersDESC);
console.log(myString2); 
// JS làm được nhiều thứ, nên học sẽ hơi tricky hơn Java, học phải nắm phần gốc, phai nắm chính xác được gì
// while loop
// Không biết được số lượng lần lập thì sử dụng while loop

let step = 5;
while (step< 5){
    console.log(step);
    step++;  
}


//Lucky Number 



module.exports = {
    isEvenNumber,
    convertToEvenNumber
}

