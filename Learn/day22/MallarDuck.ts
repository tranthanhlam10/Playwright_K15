import Duck from "./Duck";
import FlyNoway from "./FlyNoway";
import Mute from "./Mute";

export default class MallarDuck extends Duck{
    constructor(){
        super();
        this.quackBehavior = new Mute();
        this.flyBehavior = new FlyNoway()   
    };
}