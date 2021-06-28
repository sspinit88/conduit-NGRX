import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { BackendErrorMsgModule } from '../shared/components/backend-error-msg/beckend-error-msg.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { LogoutEffect } from '../auth/store/effects/logout.effect';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  },
];

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    BackendErrorMsgModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class SettingsModule {
}
