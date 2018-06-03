import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Service
import { GamesdbService } from '../../services/gamesdb.service';



@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styles: []
})
export class PlatformComponent implements OnInit {

  NewGamesOfPlatform: any[] = [];

  constructor(private _gamesdbservice: GamesdbService, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(parameters => {
      this._gamesdbservice.getNewGamesOfPlatform(parameters['id'], 5).map((response: any) => response).subscribe(response => { this.NewGamesOfPlatform = response; console.log(response); })
    });
  }
  

}
