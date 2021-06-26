import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';
import { combineLatest, forkJoin } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { getArticleAction } from '../../store/actions/get-article.action';
import { articleSelector, errorSelector, isLoadingSelector } from '../../store/selectors';
import { currentUserSelector } from '../../../auth/store/selectors';

import { InitStateValue } from '../../../shared/interfaces/initStateValue.interface';
import { Article } from '../../../shared/types/article.interface';
import { deleteArticleAction } from '../../store/actions/delete-article.action';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent
  implements OnInit,
    InitStateValue {

  slug: string | null;

  isLoading$: Observable<boolean>;
  article$: Observable<Article | null>;
  isAuthor$: Observable<boolean>;
  error$: Observable<any>;

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
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug');

    this.isLoading$ = this.store.pipe(select(isLoadingSelector));

    this.error$ = this.store.pipe(select(errorSelector));

    // TODO получаем article
    this.article$ = this.store.pipe(
      select(articleSelector),
      // tap(res => console.log('tap - this.article$:', res)),
    );

    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ).pipe(
      tap(res => console.log('1:', res)),
      map(([article, currentUser]): boolean => {
          if (!article || !currentUser) {
            return false;
          }

          // console.log('article():', article);
          // console.log('currentUser():', currentUser);

          return currentUser.username === article.author.username;
        }
      ),
    );
  }

  fetchData(): void {
    // TODO диспатчим slug, что бы получить article
    this.store.dispatch(getArticleAction({ slug: this.slug as string }));
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug as string }))
  }

}
