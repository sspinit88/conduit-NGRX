import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { RegisterRequest } from '../types/register-request.interface';
import { CurrentUser } from '../../shared/types/current-user.interface';

import { AuthResponse } from '../types/auth-response.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
  }

  get baseUrl(): string {
    return `${environment.apiUrl}/users`
  }

  register(data: RegisterRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(this.baseUrl, data)
      .pipe(
        map((res: AuthResponse) => res.user),
      );
  }
}
