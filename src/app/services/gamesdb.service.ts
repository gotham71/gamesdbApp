import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx'; //Map
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GamesdbService {

  //private userKey: string = "ab271182ceddf70bfb465f86e254a211"; //gotham71 original / good
  //private userKey: string = "aab795e53a9b66975d53a672d249c92f"; //gotham_ (gmail) testing
  private userKey: string = "12e9be8f04185ff63bff62ca8b56504a"; //igdbjmrb1  testing
  
  
  private urlGameDb: string = "https://api-endpoint.igdb.com";
  platformsNames: {};

  constructor(private http: HttpClient) { }

  public getHeaders() {
    let headers = new HttpHeaders({
      'user-key': this.userKey
    });
    return headers;
  }


  public getGames() {
    let headers = this.getHeaders();
    let url = `${this.urlGameDb}/games/?fields=*&order=name:desc`;
    
    return this.http.get(url, { headers });
  }

  public getGame(id: string) {
    let headers = this.getHeaders();
    let url = `${this.urlGameDb}/games/${id}`;
    
    return this.http.get(url, { headers });
  }

  public getScreenshotsGame(id: string) {
    let headers = this.getHeaders();
    let url = `${this.urlGameDb}/games/${id}/?fields=screenshots`;

    return this.http.get(url, { headers });
  }

  public getPlatformsIdGame(id: string) {
    let headers = this.getHeaders();
    let url = `${this.urlGameDb}/games/${id}/?fields=platforms`;

    return this.http.get(url, { headers });
  }
  
  public getPlatform(platformId: string) {
    let headers = this.getHeaders();
    let url = `${this.urlGameDb}/platforms/${platformId}`;
    
    return this.http.get(url, { headers });
  }

  public getPlatformsNameGame(platformsIdArray:string[]) {
    let platformsNameArray:string[] = [];
    let headers = this.getHeaders();
    let platforms = platformsIdArray.join();
    let url = `${this.urlGameDb}/platforms/${platforms}?fields=name&order=id:desc`;

    return this.http.get(url, { headers });   
  }

  public getPlatforms(platformsArray:any[]) {
    let platformsArrayTmp: any[] = [];
    let headers = this.getHeaders();
    let platforms = platformsArray.join();
 
    let url = `${this.urlGameDb}/platforms/${platforms}?fields=*&order=name:desc`;
  
    return this.http.get(url, { headers } );
  }

  public getNewGamesOfPlatform(platform: any, limit: any) {
    let headers = this.getHeaders();

    let url = `${this.urlGameDb}/release_dates/?fields=*&limit=${limit}&filter[platform][eq]=${platform}&order=date:asc&filter[date][gt]=${Date.now()}&expand=game`;
    
    return this.http.get(url, { headers });
  }
}
