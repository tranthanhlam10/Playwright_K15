import Animal from "./Animal";
import AnimalController from "./AnimalController";
import Dog from "./Dog";
import Tiger from "./Tiger";
import Horse from "./Horse";


const dog = new Dog("lulu", 60);
const tiger = new Tiger("ho van", 100);
const horse = new Horse("ngua diennnn", 120);
const zoo = [dog, tiger, horse]; 
const animalController = new AnimalController();
const winner = animalController.checkWinner(zoo);
console.log(`Winner is ${winner?.getName()}, with speed: ${winner?.getRandomSpeed()}`);