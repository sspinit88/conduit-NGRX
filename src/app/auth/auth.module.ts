import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';

import { PATH } from '../shared/constants/path.constant';

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
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule {
}
