import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedTogglerComponent } from './feed-toggler.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FeedTogglerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FeedTogglerComponent
  ]
})
export class FeedTogglerModule {
}
