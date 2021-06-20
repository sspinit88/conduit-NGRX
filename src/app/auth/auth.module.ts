import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

import { RegisterComponent } from './components/register/register.component';

import { PATH } from '../shared/constants/path.constant';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMsgModule } from '../shared/components/backend-error-msg/beckend-error-msg.module';


const itemComponents = [
  RegisterComponent
];

const routes: Routes = [
  {
    path: PATH.register.url,
    component: RegisterComponent,
    data: { title: PATH.register.title }
  },
];

@NgModule({
  declarations: [
    ...itemComponents,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    BackendErrorMsgModule,
    StoreModule
      .forFeature('auth', reducers),
    EffectsModule
      .forFeature([
        RegisterEffect,
      ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule {
}
