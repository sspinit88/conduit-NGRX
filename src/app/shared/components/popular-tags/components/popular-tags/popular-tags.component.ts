import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs/internal/Observable';

import { InitStateValue } from '../../../../interfaces/initStateValue.interface';
import { PopularTagType } from '../../../../types/popular-tag-type.type';
import { getPopularTagsAction } from '../../store/actions/get-popular-tags.action';
import { popularTagsErrorSelector, popularTagsIsLoadingSelector, popularTagsSelector } from '../../store/selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent
  implements OnInit,
    InitStateValue {

  isLoading$: Observable<boolean>;
  popularTags$: Observable<PopularTagType[] | null>;
  error$: Observable<string | null>;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.initializeValue();
    this.fetchData();
  }

  initializeValue(): void {
    this.isLoading$ = this.store.pipe(select(popularTagsIsLoadingSelector));
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.error$ = this.store.pipe(select(popularTagsErrorSelector));
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }

}
