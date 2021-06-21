import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { PATH } from '../../constants/path.constant';

import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from '../../../auth/store/selectors';

import { InitStateValue } from '../../interfaces/initStateValue.interface';
import { CurrentUser } from '../../types/current-user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent
  implements OnInit,
    InitStateValue {

  isLoggedIn$: Observable<boolean | null>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUser | null>;

  path: typeof PATH = PATH;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.initializeValue();
  }

  initializeValue(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

}
