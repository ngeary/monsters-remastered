import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Monster } from '../monster';

@Injectable({
  providedIn: 'root'
})
export class MenuChoiceService {

  private monsterSource = new BehaviorSubject<Monster>(null);
  public currentMonster = this.monsterSource.asObservable();

  private oppMonsterStatusSource = new BehaviorSubject<number>(-1);
  public oppMonsterStatus = this.oppMonsterStatusSource.asObservable();

  constructor() { }

  public changeMonster(newMon: Monster) {
    this.monsterSource.next(newMon);
  }

  public changeOppMonsterStatus(status: number) {
    this.oppMonsterStatusSource.next(status);
  }

  public clearMonster() {
    this.monsterSource.next(null);
    this.oppMonsterStatusSource.next(0);
  }

}
