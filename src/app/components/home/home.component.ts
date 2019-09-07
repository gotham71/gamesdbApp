import { Component, OnInit } from '@angular/core';
import { GamesdbService } from '../../services/gamesdb.service';

import { GameWithCover } from '../../classes/game-with-cover';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  gamesWithCover: GameWithCover[] = [];
  gamesFound: any;
  pic: any;

  constructor(private _gamesdbservice: GamesdbService) { }

  ngOnInit() {
  }

  searchGame(searchTerm: string) {
    this._gamesdbservice.searchGame(searchTerm).subscribe( response => {
      this.gamesFound = response;
      console.log(this.gamesFound);
      this.gamesFound.forEach(game =>{
        this._gamesdbservice.getCoverGame(game.cover).map((response: any) => response).subscribe(cover => {
          this.pic = cover;
          console.log(this.pic);
          this.pic.forEach(pic => {
            if (typeof pic.image_id === "undefined"){
              console.log('the property is not available...'); // print into console
            } else {
              if (pic.image_id !== "undefined" && pic.url !== "undefined") {
                console.log('cover: ' + pic.image_id);
                var platformTmp;
                this._gamesdbservice.getPlatformsIdGame(game.id).subscribe( platform => {
                  console.log("platform['platforms']: ");
                  console.log(platform[0].platforms);
                  platformTmp = platform[0].platforms;
                  this.gamesWithCover.push({id: game.id, name: game.name, platform: platformTmp, cover: pic.url, image_id: pic.image_id});
                });
              }
            }
          });
        });
      });
    })
  }
}
