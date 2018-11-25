import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuChoiceService {

  private monsterSource = new BehaviorSubject<number>(-1);
  public currentMonster = this.monsterSource.asObservable();
  private oppMonsterStatusSource = new BehaviorSubject<number>(-1);
  public oppMonsterStatus = this.oppMonsterStatusSource.asObservable();

  constructor() { }

  public changeMonsterNum(monsterNum: number) {
    this.monsterSource.next(monsterNum);
  }

  public changeOppMonsterStatus(status: number) {
    this.oppMonsterStatusSource.next(status);
  }

  public clearMonster() {
    // might not be necessary to change monsterSource here
    this.monsterSource.next(-1);
    this.oppMonsterStatusSource.next(0);
  }

}
