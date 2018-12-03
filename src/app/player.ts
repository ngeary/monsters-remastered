import { Trainer } from "./trainer";

export class Player extends Trainer {

    constructor() {
        super('Red', 1000, 'assets/img/stick-figure.jpg');
    }
}
