import { Component, OnInit } from '@angular/core';
import { MenuChoiceService } from '../menu-choice.service';
import { WildMonsterService } from '../wild-monster.service';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})

export class InputOutputComponent implements OnInit {

  monsterTypeId: number;
  oppMonsterStatus: number;
  message: string;

  constructor(
    private menuChoice: MenuChoiceService,
    private wildMonster: WildMonsterService) { }

  ngOnInit() {
    this.menuChoice.currentMonster.subscribe(monsterNum => this.monsterTypeId = monsterNum);
    this.menuChoice.oppMonsterStatus.subscribe(status => this.oppMonsterStatus = status);
    this.wildMonster.message.subscribe(msg => this.message = msg);
  }

  encounterMonster() {
    this.wildMonster.encounterMonster();
    this.message = null;
  }

  runAway() {
    this.wildMonster.runAway();
    this.message = null;
  }

  throwMonsterBall() {
    this.wildMonster.throwMonsterBall();
  }

}
