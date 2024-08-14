
// class để làm gì
class Person {


    //JS không cho nạp chồng
    constructor(name, age) {
        this._name = name; // Nếu không có dấu gạch dưới, tên biến trùng với properties, bị overflow
        this._age = age;
        
    }

    // Getter Setter

    set name(name) {
        this._name = name;  
    }
    
    set age(age) {
        this._age = age;  
    }

    // Làm gì cũng phải nghĩ đến hướng đối tượng

    get age() {
        return this._age;   
    }


    // co the them support method de validate thoi


    //Method - chuyên xử lý các thuộc tính trong class, khác với function, nhưng có quyên cũng không sao
}


let teo = new Person("teo", 18); 
teo.name = "Ti"; // Chỉ hiểu đơn giản là gọi setter 

console.log(teo);
console.log(teo.age);


module.exports = Person; 