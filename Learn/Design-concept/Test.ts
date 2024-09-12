import EmployeeController from "./EmployeeManagement";
import {Employee} from "./Employee";
import {FTE} from "./FTE";

let employeeController: EmployeeController = new EmployeeController();

//create data
let teo: Employee = new FTE();
let ti: Employee = new FTE();

let total = employeeController.getTotalSalary([teo, ti]);  

console.log(total); 