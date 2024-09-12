import { Employee } from "./Employee";

export default class EmployeeController{

    // Empharize IS-A relationship processing
    getTotalSalary(employeeList: Employee[]){
        let totalSalary: number = 0;
        employeeList.forEach(emp => {
            totalSalary += emp.getSalary();  
        })    
        return totalSalary; 
    }
}