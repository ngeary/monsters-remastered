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

  private monsterNum: number;
  private randNum: number;

  constructor(
    // private formBuilder: FormBuilder,
    private menuChoice: MenuChoiceService,
    private rng: RngService) { }

  ngOnInit() {
    // this.radioGroupForm = this.formBuilder.group({
    //   'choice': 1
    // });
    this.menuChoice.currentMonster.subscribe(monsterNum => this.monsterNum = monsterNum);
  }

  encounterMonster() {
    this.randNum = this.rng.getRandomInRange(AppSettings.MINMONSTER, AppSettings.MAXMONSTER);
    this.menuChoice.changeMonsterNum(this.randNum);
  }

  runAway() {
    this.menuChoice.clearMonster();
  }

}
