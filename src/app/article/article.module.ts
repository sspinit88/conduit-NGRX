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
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { ArticleSrcComponent } from './components/article-src/article-src.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { BackendErrorMsgModule } from '../shared/components/backend-error-msg/beckend-error-msg.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { UpdateArticleEffect } from './store/effects/update-article.effect';

const routes: Routes = [
  {
    path: '',
    component: ArticleSrcComponent,
    children: [
      {
        path: 'new',
        component: CreateArticleComponent
      },
      {
        path: 'edit/:slug',
        component: EditArticleComponent
      },
      {
        path: ':slug',
        component: ArticleComponent
      }
    ],
  },

];

@NgModule({
  declarations: [
    ArticleComponent,
    CreateArticleComponent,
    ArticleSrcComponent,
    EditArticleComponent,
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([
      GetArticleEffect,
      DeleteArticleEffect,
      CreateArticleEffect,
      UpdateArticleEffect,
    ]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
    BackendErrorMsgModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
  ],
})
export class ArticleModule {
}
