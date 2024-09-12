// Create Data, call controller to process data

// Nguon goc cua lap trinh MVC
import Person from "./Person";
import AgeController from "./AgeController";


let teo = new Person("teo", 11);
let ti = new Person("ti", 12);


let ageController = new AgeController();
const totalAge =  ageController.getTotalAge([teo, ti]);

console.log(totalAge);