import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuChoiceService } from './menu-choice.service';
import { MonsterLoaderService } from './monster-loader.service';
import { RngService } from './rng.service';
import { Monster } from './monster';
import { MonsterType } from './monster-type';
import { PlayerComponent } from './player/player.component';
import { catchThreshold } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class WildMonsterService {

  private messageSource = new BehaviorSubject<string>(null);
  public message = this.messageSource.asObservable();
  private randNum: number;
  monsterTypes: MonsterType[];

  constructor(
    private menuChoice: MenuChoiceService,
    private rng: RngService,
    private monsterLoader: MonsterLoaderService) { }

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
    // not quite sure why I need to call MonsterLoaderService.loadMonsterTypes()
    // from here AND opp-monster.component.ts, but it seems like I do
    this.monsterLoader.loadMonsterTypes();
    this.monsterLoader.monsterTypes.subscribe(mts => this.monsterTypes = mts);
    return this.monsterTypes[Math.floor(Math.random() * this.monsterTypes.length)];
  }

}
