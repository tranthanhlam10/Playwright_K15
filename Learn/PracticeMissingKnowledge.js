// Map, Filter, Reduce

// Map dùng để biến đổi các phần tử ở trong mảng -> Giữ nguyên số lượng phần tử trong mảng
// Ví dụ 

const arr1 = [1, 2, 3, 4];

const arr2 = arr1.map(x => x * 2);  
const arr3 = arr1.map((x)=> {
    if (x % 2 == 0) {
        return x + 10;
    } else {
        return x + 20;
    }
});
console.log(arr1);
console.log(arr2);
console.log(arr3);  

// Filter dùng để lọc các phần tử trong mảng  -> Chưa chắc giữ nguyên số lượng phần tử trong mảng

const arr4 = [-1, 10, 2, 200, -100];
const arr5 = arr4.filter(x => x  < 0);
console.log(arr5);  


// Viet kieu nhu vay lai sai => Su dung map thi se ok hon
const arr6 = arr4.filter((x) => {
    if (x < 0 ){
       return 0;
    } 
});

console.log(arr6);

// Object
// Có 3 cách để tạo Object trong JS
// Sử dụng từ khoá {}
const dog = {

    age: 18,
    height: 100

};

// Sử dụng từ khóa new 
const cat = new Object();

// Sử dụng từ khoá static
const horse = Object.create({});


console.log(dog);

// Phan ra chi la lay gan cac gia tri cua doi tuong do thong qua thuc tinh hoac bien nao do, roi lay ra sai thoi
const {age: a, height: b} = dog;
console.log(a);
console.log(b);

