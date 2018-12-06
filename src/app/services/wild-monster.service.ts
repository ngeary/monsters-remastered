import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuChoiceService } from './menu-choice.service';
import { MonsterLoaderService } from './monster-loader.service';
import { RngService } from './rng.service';
import { Monster } from '../monster';
import { MonsterType } from '../monster-type';
import { catchThreshold } from '../app-settings';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class WildMonsterService {

  curMonster: Monster;
  private messageSource = new BehaviorSubject<string>(null);
  public message = this.messageSource.asObservable();
  private randNum: number;
  monsterTypes: MonsterType[];

  constructor(
    private menuChoice: MenuChoiceService,
    private rng: RngService,
    private monsterLoader: MonsterLoaderService,
    private playerService: PlayerService) { }

  encounterMonster() {
    this.menuChoice.currentMonster.subscribe(mon => this.curMonster = mon);
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
    this.playerService.changeMoney(-10);
    if (this.randNum > catchThreshold) {
      this.messageSource.next('You caught the monster!');
      console.log(this.curMonster.monsterType.name);
      this.playerService.catchMonster(this.curMonster);
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
