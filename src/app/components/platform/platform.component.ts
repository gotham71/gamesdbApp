import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';

//Service
import { GamesdbService } from '../../services/gamesdb.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';




@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styles: []
})
export class PlatformComponent implements OnInit {

  private _albums: any[] = []; //lightbox

  NewGamesOfPlatform: any[] = [];
  screenshotsGame: any[] = [];

  constructor(private _gamedbservice: GamesdbService, public activatedRoute: ActivatedRoute, private _lightbox: Lightbox) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(parameters => {
      this._gamedbservice.getNewGamesOfPlatform(parameters['id'], 5).map((response: any) => response).subscribe(response => { 
        this.NewGamesOfPlatform = response; 
      
        console.log(response); 
      })
    });
  }

  openLightBox(cloudinary_id:string): void {
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
