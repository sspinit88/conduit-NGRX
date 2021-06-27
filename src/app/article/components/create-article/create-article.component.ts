import { Component, OnInit } from '@angular/core';

import { ArticleInput } from '../../types/article-input.interface';
import { InitStateValue } from '../../../shared/interfaces/initStateValue.interface';
import { Observable } from 'rxjs/internal/Observable';
import { BackendError } from '../../../shared/types/backend-error.interface';
import { select, Store } from '@ngrx/store';
import { errorsOfCreateArticleSelector, isSubmittingCreateArticleSelector } from '../../store/selectors';
import { createArticleAction } from '../../store/actions/create-article.action';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent
  implements OnInit,
    InitStateValue {

  initialValues: ArticleInput = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendError | null>;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.initializeValue();
  }

  initializeValue(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingCreateArticleSelector));
    this.backendErrors$ = this.store.pipe(select(errorsOfCreateArticleSelector));
  }

  onSubmit(articleInput: ArticleInput): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }

}
