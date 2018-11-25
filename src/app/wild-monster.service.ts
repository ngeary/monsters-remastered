import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuChoiceService } from './menu-choice.service';
import { RngService } from './rng.service';
import { Monster } from './monster';
import { MonsterType } from './monster-type';
import { catchThreshold } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class WildMonsterService {

  private messageSource = new BehaviorSubject<string>(null);
  public message = this.messageSource.asObservable();
  private randNum: number;

  constructor(
    private menuChoice: MenuChoiceService,
    private rng: RngService) { }

  encounterMonster() {
    this.menuChoice.changeMonster(new Monster(this.getRandomMonsterType()));
    this.menuChoice.changeOppMonsterStatus(1);
    this.messageSource.next(null);
  }

  runAway() {
    this.menuChoice.clearMonster();
    this.messageSource.next(null);
  }

  throwMonsterBall() {
    this.randNum = this.rng.getRandomInRange(1,100);
    if (this.randNum > catchThreshold) {
      this.messageSource.next('You caught the monster!');
      this.menuChoice.clearMonster();
    } else {
      this.messageSource.next('The monster escaped!');
    }
  }

  getRandomMonsterType() {
    return MonsterType.monsterTypes[Math.floor(Math.random() * MonsterType.monsterTypes.length)];
  }

}
