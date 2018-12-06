import { Monster } from './monster';

export class Trainer {

    public name: string;
    public monsters = [];
    public money: number;
    public img: string;

    constructor(
        name: string,
        money: number,
        img: string
    ) {
        this.name = name;
        this.money = money;
        this.img = img;
    }

    addMonster(m: Monster) {
        this.monsters.push(m);
    }

    addMoney(m: number) {
        this.money += m;
    }

}
