import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public mainPlayer: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.mainPlayer = new Player();
    this.playerService.mainPlayer.subscribe(mp => this.mainPlayer = mp);
  }

}
