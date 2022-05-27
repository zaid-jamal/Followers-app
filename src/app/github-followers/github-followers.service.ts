import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';


@Injectable()
export class GithubFollowersService {
  
  private readonly _url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: HttpClient) {  }
  response!: any;
  getFollowers() { 
    return this.http.get(this._url) 
}}
