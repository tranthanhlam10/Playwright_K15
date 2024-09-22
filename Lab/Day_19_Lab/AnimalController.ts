import Animal from "./Animal";

export default class AnimalController {  
  checkWinner(animals: Animal[]): Animal | undefined {
    if (animals.length === 0) {
      return undefined;
    }

    let winnerAnimal: Animal = animals[0];
    let maxSpeed = animals[0].getRandomSpeed();

    for (let i = 1; i < animals.length; i++) {
      let currentSpeed = animals[i].getRandomSpeed();
      if (currentSpeed > maxSpeed) {
        maxSpeed = currentSpeed;
        winnerAnimal = animals[i];
      }
    }

    return winnerAnimal;
  }
}
