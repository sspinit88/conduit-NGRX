import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PopularTagType } from '../../../types/popular-tag-type.type';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { GetPopularTagsResponse } from '../types/get-popular-tags-response.interface';

@Injectable()
export class PopularTagsService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';

    return this.http.get<GetPopularTagsResponse>(url)
      .pipe(
        map((res: GetPopularTagsResponse) => {
          return res.tags;
        })
      );
  }
}
