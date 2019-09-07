import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
      'user-key': this.userKey,
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return headers;
  }


  public getGames() {
    let headers = this.getHeaders();
    let searchTerm: string = 'Tomb Raider';

    let fromObject = {
      search: searchTerm,
      fields: '*',
      limit: '5'
    }

    let httpParams = new HttpParams({ fromObject });

    let url = `${this.urlGameDb}/games`;

    return this.http.get(url, {headers, params: httpParams});
  }

  public getGame(id: string) {
    let headers = this.getHeaders();
    let fromObject = {
      fields: '*'
    }
    let httpParams = new HttpParams({ fromObject });
    let url = `${this.urlGameDb}/games/${id}`;

    return this.http.get(url, { headers: headers, params: httpParams });
  }

  public getScreenshotsGame(screenshotsArray:string[]) {
    let headers = this.getHeaders();
    screenshotsArray =screenshotsArray.slice(0,5);
    let screenshots = screenshotsArray.join();
    let fromObject = {
      fields: '*'
    }
    let httpParams = new HttpParams({ fromObject });

    let url = `${this.urlGameDb}/screenshots/${screenshots}`;

    return this.http.get(url, { headers: headers, params: httpParams });
  }

  public getCoverGame(coverID:number) {
    let headers = this.getHeaders();
    let fromObject = {
      fields: '*'
    }
    let httpParams = new HttpParams({ fromObject });
    let url = `${this.urlGameDb}/covers/${coverID}`;

    return this.http.get(url, { headers: headers, params: httpParams });
  }

  public getPlatformsIdGame(id: string) {
    let headers = this.getHeaders();
    let fromObject = {
      fields: 'platforms'
    }
    let httpParams = new HttpParams({ fromObject });
    let url = `${this.urlGameDb}/games/${id}`;

    return this.http.get(url, { headers: headers, params: httpParams });
  }

  public getPlatform(platformId: number) {
    let headers = this.getHeaders();
    let fromObject = {
      fields: '*'
    }
    let httpParams = new HttpParams({ fromObject });
    let url = `${this.urlGameDb}/platforms/${platformId}`;

    return this.http.get(url, { headers: headers, params: httpParams });
  }

  public getPlatformsNameGame(platformsIdArray:string[]) {
    let headers = this.getHeaders();
    let platforms = platformsIdArray.join();
    let fromObject = {
      fields: 'name',
      limit: '50'
    }
    let url = `${this.urlGameDb}/platforms/${platforms}`;
    let params = new HttpParams({fromObject});

    return this.http.get(url, { headers, params: params });
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

    let url = `${this.urlGameDb}/games`;
    let fromObject = {
      search: searchTerm,
      fields: '*',
      limit: '50'
    }

    let params = new HttpParams({fromObject});
    return this.http.get(url, { headers, params: params });

  }
}
