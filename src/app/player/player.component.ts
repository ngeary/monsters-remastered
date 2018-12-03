import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Monster } from '../monster';
import { MenuChoiceService } from '../menu-choice.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public mainPlayer: Player;
  curMonster: Monster;

  constructor(private menuChoice: MenuChoiceService) { }

  ngOnInit() {
    this.mainPlayer = new Player();
    this.menuChoice.currentMonster.subscribe(mon => this.curMonster = mon);
  }

}
