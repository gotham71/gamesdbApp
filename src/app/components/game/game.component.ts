import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesdbService } from '../../services/gamesdb.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: []
})
export class GameComponent implements OnInit {

  game: any = {};
  screenshotsGame: any[] = [];

  constructor(public _gameDbService: GamesdbService, public activatedRoute: ActivatedRoute) {
    console.log('constructor');
    this.activatedRoute.params
      .subscribe(parameters => {
        this._gameDbService.getGame(parameters['id']).subscribe(response => { this.game = response[0]; console.log(response[0]); })


        this._gameDbService.getScreenshotsGame(parameters['id']).map( (response: any) => response[0].screenshots).subscribe( screenshotsGame => {
        this.screenshotsGame = screenshotsGame; console.log(this.screenshotsGame);
      });    
      })
    }

  ngOnInit() {
  }

}
