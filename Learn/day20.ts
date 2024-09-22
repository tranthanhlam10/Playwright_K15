//Bài hôm nay học overriding và overloading
//static variable và method -> hàm static không thể overriding
// Static block
// Thực tế reuse concept thì muốn extend như nào cũng được, nhưng nó không đúng với concept của OOP
// Khi nào cần sài chung thì mới sử dụng đến biến static
// Tính bao đóng (Giữ tính đúng đắn cho dữ liệu)
// Hiện tại typescript khi tạop thuộc tính bên trong lớp phải khởi tạo giá trị mặc định, nếu không thì phải bỏ trogn constructor
export default class Person{
    age: number;
}