import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
  ) {
  }

  delete(slug: string): Observable<{}> {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http.delete<{}>(url);
  }
}
