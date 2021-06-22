import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { HeaderModule } from './shared/components/header/header.module';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './shared/services/auth.interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule
      .instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
        // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,   // Обязательный параметр {multi: true} говорит, что injection-токен HTTP_INTERCEPTORS внедряет не одно, а массив значений. Такой механизм позволяет создавать в приложении Angular неограниченное количество HTTP Interceptor-ов.
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
