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
      this.gamesFound.forEach(game =>{
        // this._gamesdbservice.getCoverGame(game.id).map((response: any) => response).subscribe(cover => {
        //   this.pic = cover;
        //   this.pic.forEach(pic => {
        //     if (typeof pic.cover === "undefined"){
        //       console.log('the property is not available...'); // print into console
        //     } else {
        //       if (pic.cover.cloudinary_id !== "undefined" && pic.cover.url !== "undefined") {
        //         console.log('cover: ' + pic.cover.cloudinary_id);
        //         var platformTmp;
        //         this._gamesdbservice.getPlatformsIdGame(game.id).subscribe( platform => {
        //           console.log("platform['platforms']: ");
        //           console.log(platform[0].platforms[0]);
        //           platformTmp = platform[0].platforms[0];
        //           this.gamesWithCover.push({id: game.id, name: game.name, platform: platformTmp, cover: pic.cover.url, cloudinary_id: pic.cover.cloudinary_id});
        //         });
        //       }
        //     }
        //   });
        // });
      });
    })
  }
}
