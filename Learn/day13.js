// Ôn tập về call back , promise, async await


// Call back dau tien
// const name = "Lam";

// sayYouDo(name, sayHello)




// function sayHello() {
//     console.log("Say hello");
// }

// function sayYouDo(name) {
//     callBack();
//     console.log("Tao la: " + name);

// }



// Call back thật ra nhiều khi chỉ là kiểu thiết kế thôi, giống như hàm Map, filter
function Helo() {
    console.log("Trần Thanh Lâm");
}

function Hi() {
    Helo(); // Gọi hàm Helo trực tiếp
    console.log("Trần Thanh Nguyên");
}

Hi(); // Gọi hàm Hi

