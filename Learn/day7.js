// Trong JS return nó đặc biệt hơn những ngôn ngữ khác, nếu chỉ return không thì nó giống như continue vậy
// High order trong JS -> Callback trong JS

let myArr = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = myArr.filter(isEvenNumber);

function isEvenNumber(value){
    return (value % 2 === 0 && value !== 4 );
}

// Ham map co nghia la map vao theo dieu kien, bien gia tri hien tai cua mang theo 1 logic gi do
myArr.sort();
myArr.reverse();
console.log(myArr);


// Callbacl
function sayHello(name) {
    console.log("Hello" + name);
}

function functionCaller(name, functionDefinition){
    functionDefinition(name);
}

// Không có cặp ngoặc tròn thì thì gọi định nghĩa, còn nếu có ngoặc tròn thì function đó mới thực thi
functionCaller("Teo", sayHello);

//Tất cả những param đưa vào hàm phía sau array luôn nhận 1 callback function -> lúc nào cũng nhận 3 giá trị là value, index, array
let myArr1= [1,2,3,4,10];
let evenNum = myArr1.filter(function(value, index, array){
    console.log(index, array);
    return (value % 2 === 0)
});


//filter (utilities method khi xử lý mảng)
// Hiểu đơn giản là các hàm được build sẵn, mình chỉ cần đưa các hàm logic để xử lý để được kết quả mong muốn
let evenNum2 = myArr1.filter(isEvenNumber);