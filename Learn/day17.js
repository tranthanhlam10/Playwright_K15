// Arrow function

const arrowAdd2Numbers = (a,b) => a+b;

// Có thể xem function là 1 thuọc thính trong 1 object, hoặc là trong 1 class
// Trong JS không hỗ trợ kĩ thuật overloading, nhưng vẫn có 1 kĩ thuật khác để implement nó


// Ở trường hợp này sẽ lấy thằng thứ 2, thằng đầu tiên sẽ coi như không tồn tại
class MethodOverloading{
    static add(a,b){
        return a+b; 
    }

    static add(a,b,c){
        return a+b+c
    } 
}


function test(a ,b) {
    return a + b; 
}  

