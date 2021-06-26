import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { DeleteArticleEffect } from './store/effects/delete-article.effect';

import { LoadingModule } from '../shared/components/loading/loading.module';
import { ErrorMessageModule } from '../shared/components/error-message/error-message.module';
import { TagListModule } from '../shared/components/tag-list/tag-list.module';

import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {
    path: ':slug',
    component: ArticleComponent
  }
];

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([
      GetArticleEffect,
      DeleteArticleEffect,
    ]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ],
  exports: [
    RouterModule,
  ],
})
export class ArticleModule {
}
