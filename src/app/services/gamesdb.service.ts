import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx'; //Map

@Injectable()
export class GamesdbService {

  private userKey: string = "ab271182ceddf70bfb465f86e254a211";
  private urlGameDb: string = "https://api-endpoint.igdb.com/pro";

  constructor(private http: HttpClient) { }

  public getHeaders() {
    let headers = new HttpHeaders({
      'user-key': this.userKey
    });
    return headers;
  }


  public getGames() {

    let headers = this.getHeaders();
    let url = `${this.urlGameDb}/games/?limit=200&fields=*&order=name:desc`;
    
    return this.http.get(url, { headers }).map(res => res);
  }

  public getGame(id: string) {
    
    let headers = this.getHeaders();
    let url = `${this.urlGameDb}/games/${id}`;
    
    return this.http.get(url, { headers }).map(res => res);
  }

  public getScreenshotsGame(id: string) {
    let headers = this.getHeaders();
    let url = `${this.urlGameDb}/games/${id}/?fields=screenshots`;

    return this.http.get(url, { headers }).map(res => res);
  }

  public getPlatformsIdGame(id: string) {
    let headers = this.getHeaders();
    let url = `${this.urlGameDb}/games/${id}/?fields=platforms`;

    return this.http.get(url, { headers }).map(res => res);
  }


  public getPlatforms() {
    
    let headers = this.getHeaders();
    let url=`${this.urlGameDb}/platforms/?limit=200&fields=*&order=name:desc`;
  
    return this.http.get(url, { headers } ).map(res => res);
  }
}
