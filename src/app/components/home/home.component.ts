import { Component, OnInit } from '@angular/core';
import { GamesdbService } from '../../services/gamesdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private _gamesdbservice: GamesdbService) { }

  ngOnInit() {
  }

  searchGame(searchTerm: string) {
    this._gamesdbservice.searchGame(searchTerm).subscribe( response => { console.log(response); } )
  }

}
