import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from './store/effects/get-popular-tags.effect';
import { reducers } from './store/reducer';

import { PopularTagsService } from './services/popular-tags.service';

import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule
      .forFeature('popularTags', reducers),
    EffectsModule
      .forFeature([
        GetPopularTagsEffect,
      ]),
    LoadingModule,
    ErrorMessageModule,

  ],
  providers: [
    PopularTagsService
  ],
  exports: [
    PopularTagsComponent
  ],
})
export class PopularTagsModule {
}
