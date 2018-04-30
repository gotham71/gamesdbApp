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

  constructor(private _gamesdbservice: GamesdbService) {
    this._gamesdbservice.getPlatforms().subscribe(response => { this.platforms = response;});
  }

  ngOnInit() {
  }

}
