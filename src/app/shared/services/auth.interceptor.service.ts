import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { PersistenceService } from './persistence.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor
  implements HttpInterceptor {

  constructor(
    private persistenceService: PersistenceService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get('token');

    const request = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      },
    });

    return next.handle(request);
  }


}
