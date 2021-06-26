import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { GetArticleResponse } from '../types/get-article-response.interface';
import { environment } from '../../../environments/environment';
import { Article } from '../types/article.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getArticle(slug: string): Observable<Article> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http.get<GetArticleResponse>(fullUrl)
      .pipe(
        map((res: GetArticleResponse) => {
          return res.article;
        })
      );
  }
}
