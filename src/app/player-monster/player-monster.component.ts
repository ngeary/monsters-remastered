import { Component, OnInit } from '@angular/core';
import { MonsterType } from '../monster-type';
import { MonsterLoaderService } from '../monster-loader.service';
import { AppSettings } from '../app-settings';

@Component({
  selector: 'app-player-monster',
  templateUrl: './player-monster.component.html',
  styleUrls: ['./player-monster.component.css']
})
export class PlayerMonsterComponent extends MonsterType implements OnInit {

  min: number;
  max: number;

  constructor(public monsterLoader: MonsterLoaderService) {
    super(monsterLoader);
  }

  ngOnInit() {
    this.min = AppSettings.MINMONSTER;
    this.max = AppSettings.MAXMONSTER;
  }

}
