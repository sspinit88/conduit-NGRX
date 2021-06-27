import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

import { select, Store } from '@ngrx/store';
import {
  articleSelector,
  errorOfUpdateArticleSelector,
  isSubmittingUpdateArticleSelector
} from '../../store/selectors';

import { ArticleInput } from '../../types/article-input.interface';
import { BackendError } from '../../../shared/types/backend-error.interface';
import { Article } from '../../../shared/types/article.interface';
import { getArticleAction } from '../../store/actions/get-article.action';
import { updateArticleAction } from '../../store/actions/update-article.action';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent
  implements OnInit {

  slug: string;
  initialValues$: Observable<ArticleInput | null>;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendError | null>;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.initializeValue();
    this.fetchData();
  }

  initializeValue(): void {
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug') as string;

    this.isSubmitting$ = this.store.pipe(select(isSubmittingUpdateArticleSelector));

    this.backendErrors$ = this.store.pipe(select(errorOfUpdateArticleSelector));

    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      map((res: Article | null) => {
        if (res == null) {
          return null;
        }

        return {
          title: res?.title || '',
          description: res?.description || '',
          body: res?.body || '',
          tagList: res?.tagList || [],
        };
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onSubmit(articleInput: ArticleInput): void {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }))
  }

}
