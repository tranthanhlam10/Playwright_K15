import FlyBehavior from "./FlyBehavior";
import QuackBehavior from "./QuackBehavior";
import FlyNoway from "./FlyNoway";
import Mute from "./Mute";

export default class Duck {
    protected flyBehavior: FlyBehavior = new FlyNoway();
    protected quackBehavior: QuackBehavior = new Mute();

    performQuack(): void {
        this.quackBehavior.quack(); 
    }

}  