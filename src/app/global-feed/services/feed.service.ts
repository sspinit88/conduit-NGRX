import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { FeedResponse } from '../types/feed-response.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private http: HttpClient,
  ) {
  }

  get baseUrl(): string {
    return environment.apiUrl;
  }

  getFeed(url: string): Observable<FeedResponse> {
    const fullURL: string = `${this.baseUrl}/${url}`;
    return this.http.get<FeedResponse>(fullURL);
  }
}
