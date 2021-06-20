import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMsgComponent } from './backend-error-msg.component';

@NgModule({
  declarations: [
    BackendErrorMsgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackendErrorMsgComponent
  ],
})
export class BackendErrorMsgModule {
}
