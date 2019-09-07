import { Component, OnInit } from '@angular/core';
import { GamesdbService } from '../../services/gamesdb.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: []
})
export class GameListComponent implements OnInit {

  games: any;

  constructor(private _gamesdbservice: GamesdbService) {
    this._gamesdbservice.getGames().subscribe(response => { this.games = response; console.log(response); });
  }

  ngOnInit() {

  }


}
