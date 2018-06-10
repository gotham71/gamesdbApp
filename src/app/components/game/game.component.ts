import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';

//Service
import { GamesdbService } from '../../services/gamesdb.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: []
})
export class GameComponent implements OnInit {
  
  private _albums: any[] = []; //lightbox

  game: any = {};
  screenshotsGame: any[] = [];
  screenshotGameBg: any;
  platformsGame: any[] = [];
  platformsNameGame: any[] = [];

  constructor(public _gameDbService: GamesdbService, public activatedRoute: ActivatedRoute, private _lightbox: Lightbox) {}
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(parameters => {
        this._gameDbService.getGame(parameters['id']).subscribe(response => { this.game = response[0]; console.log(response[0]); })
  
        this._gameDbService.getScreenshotsGame(parameters['id']).map( (response: any) => response[0].screenshots).subscribe( screenshotsGame => {
          this.screenshotsGame = screenshotsGame;
          let randomBgNumber: number;
          randomBgNumber = Math.floor(Math.random() * this.screenshotsGame.length);
          this.screenshotGameBg = screenshotsGame[randomBgNumber];
        });

        this._gameDbService.getPlatformsIdGame(parameters['id']).map( (response: any) => response[0].platforms).subscribe( platformsGame => {
          this.platformsGame = platformsGame; 
          this._gameDbService.getPlatformsNameGame(this.platformsGame).map((response: any) => response).subscribe(platformsNameGame => {
            this.platformsNameGame = platformsNameGame; 
          }); 
        });

      })
  }

  openLightBox(cloudinary_id: string): void {
    // open lightbox

    this._albums = [];
    const src = 'https://images.igdb.com/igdb/image/upload/t_720p/' + cloudinary_id;
    const caption = '-';
    const thumb = '-';
    const album = {
      src: src,
      caption: caption,
      thumb: thumb
    };
    this._albums.push(album);
    this._lightbox.open(this._albums, 0);
  }

}
