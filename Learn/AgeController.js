

// class này xử lý cho lương của Person
// Dùng lập trình hướng hàm để xử lý cho lập trình hướng đối tượng
class AgeController{

      getTotalAge(person){
        let totalAge = 0;
        person.forEach(function(employee){
            totalAge += employee.age;   
        })   
        return totalAge;
     }   

}

module.exports = AgeController;