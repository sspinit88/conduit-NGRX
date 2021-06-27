import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

import { environment } from '../../../environments/environment';

import { ArticleInput } from '../types/article-input.interface';
import { SaveArticleResponse } from '../types/save-article-response.interface';
import { Article } from '../../shared/types/article.interface';


@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

  constructor(
    private http: HttpClient,
  ) {
  }

  create(articleInput: ArticleInput): Observable<Article> {
    const url = `${environment.apiUrl}/articles`;

    return this.http.post<SaveArticleResponse>(url, articleInput)
      .pipe(
        map((res: SaveArticleResponse) => res.article),
      );
  }

}
