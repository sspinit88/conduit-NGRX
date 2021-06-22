import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import { feedDataSelector, feedErrorSelector, isLoadingSelector } from '../../store/effects/selectors';
import { getFeedAction } from '../../store/actions/get-feed.action';

import { InitStateValue } from '../../../shared/interfaces/initStateValue.interface';
import { FeedResponse } from '../../types/feed-response.interface';
import { PATH } from 'src/app/shared/constants/path.constant';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent
  implements OnInit,
    InitStateValue {

  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<FeedResponse | null>

  path: typeof PATH = PATH;

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.initializeValue();
    this.fetchData();
  }

  initializeValue(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(feedErrorSelector));
    this.feed$ = this.store.pipe(select(feedDataSelector));
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }

}
