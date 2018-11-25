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
export class OppMonsterComponent extends MonsterType implements OnInit {

  curMonster: Monster;
  oppMonsterStatus: number;

  constructor(private menuChoice: MenuChoiceService, public monsterLoader: MonsterLoaderService) {
    super(monsterLoader);
   }

  ngOnInit() {
    super.loadMonsterTypes();
    this.menuChoice.currentMonster.subscribe(mon => this.curMonster = mon);
    this.menuChoice.oppMonsterStatus.subscribe(status => this.oppMonsterStatus = status);
  }

}
