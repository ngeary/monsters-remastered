import { MonsterType } from './monster-type';

export class Monster {

    public static monsterCounter = 100;
    public monsterType: MonsterType;
    public serialNum: number;
    public level: number;
    public maxHp: number;
    public curHp: number;
    public attack: number;
    public defense: number;
    public speed: number;
    public difficulty: number;

    constructor(mt: MonsterType) {
        this.monsterType = mt;
        this.serialNum = Monster.monsterCounter++;
        this.level = 1;
        this.maxHp = mt.baseMaxHp;
        this.curHp = this.maxHp;
        this.attack = mt.baseAttack;
        this.defense = mt.baseDefense;
        this.speed = mt.baseSpeed;
        this.difficulty = mt.baseDifficulty;
    }

}
