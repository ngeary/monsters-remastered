import { Injectable } from '@angular/core';
import { Monster } from '../monster';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private p = new Player();
  private mainPlayerSource = new BehaviorSubject<Player>(this.p);
  public mainPlayer = this.mainPlayerSource.asObservable();

  constructor() { }

  catchMonster(m: Monster) {
    this.p.addMonster(m);
    this.mainPlayerSource.next(this.p);
  }

  changeMoney(m: number) {
    this.p.money += m;
    this.mainPlayerSource.next(this.p);
  }
}
