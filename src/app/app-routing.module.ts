import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./global-feed/global-feed.module').then(m => m.GlobalFeedModule),
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
];

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot(routes, {
      // автоматическая прокрутка страницы вверх при смене роута
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
