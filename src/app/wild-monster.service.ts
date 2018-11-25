import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuChoiceService } from './menu-choice.service';
import { RngService } from './rng.service';
import { AppSettings } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class WildMonsterService {

  randNum: number;
  private messageSource = new BehaviorSubject<string>(null);
  public message = this.messageSource.asObservable();

  constructor(
    private menuChoice: MenuChoiceService,
    private rng: RngService) { }

  encounterMonster() {
    this.randNum = this.rng.getRandomInRange(AppSettings.MINMONSTER, AppSettings.MAXMONSTER);
    this.menuChoice.changeMonsterNum(this.randNum);
    this.menuChoice.changeOppMonsterStatus(1);
  }

  runAway() {
    this.menuChoice.clearMonster();
  }

  throwMonsterBall() {
    this.randNum = this.rng.getRandomInRange(1,100);
    if (this.randNum > 75) {
      this.messageSource.next('You caught the monster!');
      this.menuChoice.clearMonster();
    } else {
      this.messageSource.next('The monster escaped!');
    }
  }

}
