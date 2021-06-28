import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { RegisterRequest } from '../types/register-request.interface';
import { CurrentUser } from '../../shared/types/current-user.interface';

import { AuthResponse } from '../types/auth-response.interface';
import { LoginRequest } from '../types/login.interface';
import { CurrentUserInput } from 'src/app/shared/types/current-user-input.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
  }

  get baseUrl(): string {
    return environment.apiUrl
  }

  register(data: RegisterRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(this.baseUrl + '/users', data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(this.baseUrl + '/users/login', data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUser> {
    return this.http.get<AuthResponse>(this.baseUrl + '/user')
      .pipe(map(this.getUser));
  }

  getUser(response: AuthResponse): CurrentUser {
    return response.user;
  }

  updateCurrentUser(currentUserInput: CurrentUserInput): Observable<CurrentUser> {
    const url = environment.apiUrl + '/user';

    return this.http.put<AuthResponse>(url, currentUserInput)
      .pipe(map(this.getUser));
  }
}
