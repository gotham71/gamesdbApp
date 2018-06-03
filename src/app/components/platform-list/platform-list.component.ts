import { Component, OnInit } from '@angular/core';

//Service
import { GamesdbService } from '../../services/gamesdb.service';


@Component({
  selector: 'app-platform-list',
  templateUrl: './platform-list.component.html',
  styles: []
})
export class PlatformListComponent implements OnInit {

  platforms: any;
  platformsArray = [6, 49, 48, 130, 13, 26, 15, 27];
  //platformsArray = [49,48,130,6,12,13,5,4,9,8,7,11,23,4,21,15,26,27];

  constructor(private _gamesdbservice: GamesdbService) {
  }
  
  ngOnInit() {
    this._gamesdbservice.getPlatforms(this.platformsArray).subscribe(response => { this.platforms = response;});
  }

}
