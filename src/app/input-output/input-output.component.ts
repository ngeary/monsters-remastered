import { Component, OnInit } from '@angular/core';
import { MenuChoiceService } from '../menu-choice.service';
import { WildMonsterService } from '../wild-monster.service';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})

export class InputOutputComponent implements OnInit {

  oppMonsterStatus: number;
  message: string;

  constructor(
    private menuChoice: MenuChoiceService,
    private wildMonster: WildMonsterService) { }

  ngOnInit() {
    this.menuChoice.oppMonsterStatus.subscribe(status => this.oppMonsterStatus = status);
    this.wildMonster.message.subscribe(msg => this.message = msg);
  }

  encounterMonster() {
    this.wildMonster.encounterMonster();
  }

  runAway() {
    this.wildMonster.runAway();
  }

  throwMonsterBall() {
    this.wildMonster.throwMonsterBall();
  }

}
