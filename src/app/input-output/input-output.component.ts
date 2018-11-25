import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuChoiceService } from '../menu-choice.service';
import { RngService } from '../rng.service';
import { AppSettings } from '../app-settings';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})

export class InputOutputComponent implements OnInit {
  // public radioGroupForm: FormGroup;

  monsterTypeId: number;
  randNum: number;
  min: number;
  max: number;
  oppMonsterStatus: number;
  message: string;

  constructor(
    // private formBuilder: FormBuilder,
    private menuChoice: MenuChoiceService,
    private rng: RngService) { }

  ngOnInit() {
    // this.radioGroupForm = this.formBuilder.group({
    //   'choice': 1
    // });
    this.menuChoice.currentMonster.subscribe(monsterNum => this.monsterTypeId = monsterNum);
    this.menuChoice.oppMonsterStatus.subscribe(status => this.oppMonsterStatus = status);
    this.min = AppSettings.MINMONSTER;
    this.max = AppSettings.MAXMONSTER;
  }

  encounterMonster() {
    this.randNum = this.rng.getRandomInRange(AppSettings.MINMONSTER, AppSettings.MAXMONSTER);
    this.menuChoice.changeMonsterNum(this.randNum);
    this.menuChoice.changeOppMonsterStatus(1);
    this.message = null;
  }

  runAway() {
    this.menuChoice.clearMonster();
    this.message = null;
  }

  throwMonsterBall() {
    console.log('You threw a MonsterBall!');
    this.randNum = this.rng.getRandomInRange(1,100);
    if (this.randNum > 75) {
      this.message = 'You caught the monster!';
      this.menuChoice.clearMonster();
    } else {
      this.message = 'The monster escaped!';
    }

  }

}
