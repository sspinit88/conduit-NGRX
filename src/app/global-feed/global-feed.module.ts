import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/get-feed.effect';
import { reducers } from './store/reducer';

import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { FeedComponent } from './components/feed/feed.component';

import { BannerModule } from '../shared/components/banner/banner.module';
import { ErrorMessageModule } from '../shared/components/error-message/error-message.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';
import { TagListModule } from '../shared/components/tag-list/tag-list.module';
import { PopularTagsModule } from '../shared/components/popular-tags/popular-tags.module';
import { FeedTogglerModule } from '../shared/components/feed-toggler/feed-toggler.module';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  }
];

@NgModule({
  declarations: [
    GlobalFeedComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule
      .forFeature('feed', reducers),
    EffectsModule
      .forFeature([
        GetFeedEffect,
      ]),
    BannerModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
  exports: [
    RouterModule,
  ]
})
export class GlobalFeedModule {
}
