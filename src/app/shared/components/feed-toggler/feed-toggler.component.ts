import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { InitStateValue } from '../../interfaces/initStateValue.interface';
import { isLoggedInSelector } from '../../../auth/store/selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent
  implements OnInit,
    InitStateValue {

  @Input('tagName') tagNameProps: string | null = null;

  isLoggedIn$: Observable<boolean | null>;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.initializeValue();
  }

  initializeValue(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }

}
