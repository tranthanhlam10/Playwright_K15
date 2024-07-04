// Common JS Module System
// ES^ module system

// Declaration: Function expression
const calculateBMI  =  function(weight, height){
    const BMI = weight / (height* 2);
    if (BMI < 18.5){
        console.log("Underweight");
    } else if (BMI >= 18.5 && BMI < 24.9){
        console.log("Normal weight")
    } else if (BMI >= 25 && BMI < 29.9 ){
        console.log("Over weight")
    } else {
        console.log("Obesity")
    }
    console.log("BMI is: " + BMI )
    return BMI;
}

//Loop -> Mỗi lần thực thi xong thì tăng lên 1 đơn vị -> init value let i = 0 chỉ được khỏi tạo 1 lần
for (let i = 0; i < 10; i++){
    console.log("Cac so duoc lap la" + i);
}


// Array trong java là mảng có giới hạn độ dài, còn mảng trong JS thì là mảng không giới hạn độ dài
// Nguyên tắc khi học collection -> Cơ bản giống như là học CRUD
// Literal Declaration
let myNumArray = [10,2,32,43,54];
// lặp mảng thì xử dung for-index (Có nghĩa là lặp theo index)
console.log(myNumArray.length);
console.log(myNumArray[3]); 
//element và index
// Array Constructor

for (let i = 0; i < myNumArray.length; i++){
    myNumArray[i] = myNumArray[i] *2;        
    //console.log(myNumArray);
}
console.log(myNumArray);
myNumArray.pop();
console.log(myNumArray);
myNumArray.push(111);
console.log(myNumArray);

//Export
module.exports = {calculateBMI};