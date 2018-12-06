import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-monster',
  templateUrl: './player-monster.component.html',
  styleUrls: ['./player-monster.component.css']
})
export class PlayerMonsterComponent implements OnInit {

  mainPlayer: Player;

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.mainPlayer = new Player();
    this.playerService.mainPlayer.subscribe(mp => this.mainPlayer = mp);
  }

}
