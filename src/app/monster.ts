import { MonsterType } from './monster-type';

export class Monster {

    monsterType: MonsterType;
    serialNum: number;
    static numMons: number;

    constructor(mt: MonsterType) {
        this.monsterType = mt;
        this.serialNum = 917;
    }

}
