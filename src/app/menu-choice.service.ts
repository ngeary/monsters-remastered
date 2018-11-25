import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { Monster } from './monster';
// import { MonsterType } from './monster-type';

@Injectable({
  providedIn: 'root'
})
export class MenuChoiceService {

  private monsterSource = new BehaviorSubject<number>(-1);
  public currentMonster = this.monsterSource.asObservable();
  private oppMonsterStatusSource = new BehaviorSubject<number>(-1);
  public oppMonsterStatus = this.oppMonsterStatusSource.asObservable();
  // public trialMonster: Monster;

  constructor() { }

  public changeMonsterNum(monsterNum: number) {
    this.monsterSource.next(monsterNum);
    // this.trialMonster = new Monster(MonsterType.monsterTypes[1]);
  }

  public changeOppMonsterStatus(status: number) {
    this.oppMonsterStatusSource.next(status);
  }

  public clearMonster() {
    this.monsterSource.next(-1);
    this.oppMonsterStatusSource.next(0);
  }

}
