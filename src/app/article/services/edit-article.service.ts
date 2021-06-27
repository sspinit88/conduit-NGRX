import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Article } from '../../shared/types/article.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ArticleInput } from '../types/article-input.interface';
import { SaveArticleResponse } from '../types/save-article-response.interface';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class EditArticleService {

  constructor(
    private http: HttpClient,
  ) {
  }

  updateArticle(slug: string, articleInput: ArticleInput): Observable<Article> {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http.put<SaveArticleResponse>(url, articleInput)
      .pipe(
        map((res: SaveArticleResponse) => res.article),
      );
  }
}
