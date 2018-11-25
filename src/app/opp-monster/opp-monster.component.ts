import { Component, OnInit } from '@angular/core';
import { MenuChoiceService } from '../menu-choice.service';
import { MonsterType } from '../monster-type';
import { MonsterLoaderService } from '../monster-loader.service';
import { AppSettings } from '../app-settings';

@Component({
  selector: 'app-opp-monster',
  templateUrl: './opp-monster.component.html',
  styleUrls: ['./opp-monster.component.css']
})
export class OppMonsterComponent extends MonsterType implements OnInit {

  monsterTypeId: number;
  min: number;
  oppMonsterStatus: number;

  constructor(private menuChoice: MenuChoiceService, public monsterLoader: MonsterLoaderService) {
    super(monsterLoader);
   }

  ngOnInit() {
    super.loadMonsterTypes();
    this.min = AppSettings.MINMONSTER;
    this.menuChoice.currentMonster.subscribe(monsterNum => this.monsterTypeId = monsterNum);
    this.menuChoice.oppMonsterStatus.subscribe(status => this.oppMonsterStatus = status);
  }

}
