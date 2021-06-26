import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { feedDataSelector, feedErrorSelector, isLoadingSelector } from '../../store/effects/selectors';
import { getFeedAction } from '../../store/actions/get-feed.action';

import { parseUrl, stringify } from 'query-string';

import { PATH } from 'src/app/shared/constants/path.constant';
import { environment } from '../../../../environments/environment';

import { InitStateValue } from '../../../shared/interfaces/initStateValue.interface';
import { FeedResponse } from '../../types/feed-response.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent
  implements OnInit,
    OnDestroy,
    InitStateValue {

  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<FeedResponse | null>
  queryParamsSubscription: Subscription;

  path: typeof PATH = PATH;
  baseUrl: string = '';
  limit: number = environment.limit;
  currentPage: number;

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.initializeValue();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  initializeValue(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(feedErrorSelector));
    this.feed$ = this.store.pipe(select(feedDataSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.activatedRoute
      .queryParams
      .subscribe((params: Params) => {
        this.currentPage = Number(params.page || '1');

        this.fetchData();
      })
  };

  fetchData(): void {
    // TODO высчитываем offset
    const offset = this.currentPage * this.limit - this.limit;
    const parseItmUrl = parseUrl(this.apiUrlProps);

    const stringifyParams = stringify({
      limit: this.limit,
      offset,
      ...parseItmUrl.query
    });

    const apiUrlWithParams = `${parseItmUrl.url}?${stringifyParams}`

    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }

}
