import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './auth/auth.module';

const routes: Routes = [];

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
