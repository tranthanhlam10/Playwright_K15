import QuackBehavior from "./QuackBehavior";

export default class Mute implements QuackBehavior {
  quack(): void {
    console.log("I can quack");
  }
}
