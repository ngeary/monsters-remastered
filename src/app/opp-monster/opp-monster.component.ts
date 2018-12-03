import { Component, OnInit } from '@angular/core';
import { MenuChoiceService } from '../menu-choice.service';
import { MonsterType } from '../monster-type';
import { Monster } from '../monster';
import { MonsterLoaderService } from '../monster-loader.service';

@Component({
  selector: 'app-opp-monster',
  templateUrl: './opp-monster.component.html',
  styleUrls: ['./opp-monster.component.css']
})
export class OppMonsterComponent implements OnInit {

  curMonster: Monster;
  oppMonsterStatus: number;
  monsterTypes: MonsterType[];

  constructor(private menuChoice: MenuChoiceService, public monsterLoader: MonsterLoaderService) {}

  ngOnInit() {
    this.monsterLoader.loadMonsterTypes();
    this.monsterLoader.monsterTypes.subscribe(mts => this.monsterTypes = mts);
    this.menuChoice.currentMonster.subscribe(mon => this.curMonster = mon);
    this.menuChoice.oppMonsterStatus.subscribe(status => this.oppMonsterStatus = status);
  }

}
