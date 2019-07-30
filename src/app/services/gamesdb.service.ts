import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx'; //Map
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GamesdbService {

  private userKey: string = '8cf15c0e132a9d71481173917b6891bc'; //gotham71 original / good
  //private userKey: string = 'aab795e53a9b66975d53a672d249c92f'; //gotham_ (gmail) testing
  //private userKey: string = '12e9be8f04185ff63bff62ca8b56504a'; //igdbjmrb1  testing
  //private userKey: string = 'f2dbbea0a5e607fd77f258580e052c68'; //igdbjmrb2  testing
  //private userKey: string = 'd99a3c3c862eb727e6e84c1167f0ca37'; //igdbjmrb3  testing




  private urlGameDb: string = 'https://api-v3.igdb.com';
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
    let headers = this.getHeaders();
    let platforms = platformsIdArray.join();
    console.log('platforms: ' + platforms);

    let url = `${this.urlGameDb}/platforms/${platforms}?fields=name&order=id:desc`;

    return this.http.get(url, { headers });
  }

  public getPlatforms(platformsArray:any[]) {
    let headers = this.getHeaders();
    let platforms = platformsArray.join();

    let url = `${this.urlGameDb}/platforms/${platforms}?fields=*&order=name:desc`;

    return this.http.get(url, { headers } );
  }

  public getNewGamesOfPlatform(platform: any, limit: number) {
    let headers = this.getHeaders();

    let url = `${this.urlGameDb}/release_dates/?fields=*&limit=${limit}&filter[platform][eq]=${platform}&order=date:asc&filter[date][gt]=${Date.now()}&expand=game`;

    return this.http.get(url, { headers });
  }

  public getGamesRandomlyOfPlatform(platform: any, id: string) {
    let headers = this.getHeaders();

    let url = `${this.urlGameDb}/games/${id}?filter[release_dates.platform][eq]=${platform}`;

    return this.http.get(url, { headers });
  }

  public searchGame(searchTerm: string) {
    let headers = this.getHeaders();

    let url = `${this.urlGameDb}/games/?search=${searchTerm}&fields=name&limit=5`;

    return this.http.get(url, { headers });
  }
}
