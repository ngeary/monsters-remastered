import { MonsterType } from './monster-type';

export class Monster {

    public monsterType: MonsterType;
    public serialNum: number;
    public static monsterCounter = 100;

    constructor(mt: MonsterType) {
        this.monsterType = mt;
        this.serialNum = Monster.monsterCounter;
        Monster.monsterCounter++;
    }

}
