import { MonsterType } from './monster-type';

export class Monster {

    public static monsterCounter = 100;
    public monsterType: MonsterType;
    public serialNum: number;

    constructor(mt: MonsterType) {
        this.monsterType = mt;
        this.serialNum = Monster.monsterCounter;
        Monster.monsterCounter++;
    }

}
