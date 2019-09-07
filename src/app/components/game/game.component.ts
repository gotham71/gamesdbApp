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
  screenshotsGame: any = [];
  screenshotGameBg: any;
  platformsGame: any[] = [];
  platformsNameGame: any = [];
  coverGame: any;

  constructor(public _gameDbService: GamesdbService, public activatedRoute: ActivatedRoute, private _lightbox: Lightbox) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(parameters => {
        this._gameDbService.getGame(parameters['id']).subscribe(response => {
          this.game = response[0];
          console.dir(this.game);

          if (this.game.platforms) {
            this.platformsGame = this.game.platforms;
            this._gameDbService.getPlatformsNameGame(this.platformsGame).subscribe(platformsNameGame => {
              this.platformsNameGame = platformsNameGame;
            });
          }


          let randomBgNumber: number;
          if (this.game.screenshots) {
            this._gameDbService.getScreenshotsGame(this.game.screenshots).subscribe( screenshotsGame => {
              this.screenshotsGame = screenshotsGame;
              randomBgNumber = Math.floor(Math.random() * this.screenshotsGame.length);
              this.screenshotGameBg = screenshotsGame[randomBgNumber];
            });
          }

          if (this.game.cover) {
            this._gameDbService.getCoverGame(this.game.cover).subscribe( coverGame => {
              if (coverGame[0]) {
                this.coverGame = coverGame[0].image_id;
              }
            });
          }


        });

      })
  }

  openLightBox(image_id: string): void {
    // open lightbox

    this._albums = [];
    const src = 'https://images.igdb.com/igdb/image/upload/t_720p/' + image_id + '.jpg';
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
