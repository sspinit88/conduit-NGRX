import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Article } from '../../../types/article.interface';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { GetArticleResponse } from '../../../types/get-article-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AddToFavoritesService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getArticle(response: GetArticleResponse): Article {
    return response.article;
  }

  getUrl(slug: string) {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  addToFavorites(slug: string): Observable<Article> {
    return this.http.post<GetArticleResponse>(this.getUrl(slug), {})
      .pipe(
        map(this.getArticle)
      );
  }

  removeFormFavorites(slug: string): Observable<Article> {
    return this.http.delete<GetArticleResponse>(this.getUrl(slug))
      .pipe(
        map(this.getArticle)
      );
  }
}
