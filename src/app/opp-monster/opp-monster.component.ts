import { Component, OnInit } from '@angular/core';
import { MenuChoiceService } from '../menu-choice.service';
import { Monster } from '../monster';
import { MonsterLoaderService } from '../monster-loader.service';
import { AppSettings } from '../app-settings';

@Component({
  selector: 'app-opp-monster',
  templateUrl: './opp-monster.component.html',
  styleUrls: ['./opp-monster.component.css']
})
export class OppMonsterComponent extends Monster implements OnInit {

  monsterTypeId: number;
  min: number;
  max: number;

  constructor(private menuChoice: MenuChoiceService, public monsterLoader: MonsterLoaderService) {
    super(monsterLoader);
    this.min = AppSettings.MINMONSTER;
    this.max = AppSettings.MAXMONSTER;
   }

  ngOnInit() {
    super.loadMonsterTypes();
    this.menuChoice.currentMonster.subscribe(monsterNum => this.monsterTypeId = monsterNum);
  }

}
