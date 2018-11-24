import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuChoiceService {

  private monsterSource = new BehaviorSubject<number>(3);
  public currentMonster = this.monsterSource.asObservable();

  constructor() { }

  public changeMonsterNum(monsterNum: number) {
    this.monsterSource.next(monsterNum);
  }

  public clearMonster() {
    // set the monster type ID to -1; this effectively hides the
    // opp-monster component because opp-monster.component.html
    // has logic to only show if the monster type ID is in range
    this.monsterSource.next(-1);
  }

}
