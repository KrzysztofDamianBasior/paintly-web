import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertService } from './alert.service';
import jwtDecode, { JwtPayload } from 'jwt-decode';

export interface SignUpResponseData {
  token: string;
  sub: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  roles: string[];
  email?: string;
}

export interface User {
  id: string;
  username: string;
  roles: string[];
  email?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SignInResponseData extends SignUpResponseData {}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _jwtTokenSource$ = new BehaviorSubject<String | null>(null);
  jwtToken$ = this._jwtTokenSource$.asObservable();

  setJwt(jwt: string | null) {
    localStorage.setItem(environment.localStorageJwtKey, JSON.stringify(jwt));
    this._jwtTokenSource$.next(jwt);
  }

  private _authenticatedUserSource$ = new BehaviorSubject<User | null>(null);
  authenticatedUser$ = this._authenticatedUserSource$.asObservable();
  // authenticatedUser$.pipe(
  //   filter((currentUser) => currentUser !== null),
  //   map((currentUser) => {
  //     if (!currentUser) {
  //       this.router.navigateByUrl('/auth');
  //       return false;
  //     }
  //     return true;
  //   })
  // );

  setAuthenticatedUser(user: User | null) {
    this._authenticatedUserSource$.next(user);
    localStorage.setItem(
      environment.localStorageUserDataKey,
      JSON.stringify(user)
    );
  }

  checkIfTokenNotExpired(token: string) {
    const decoded_token = jwtDecode<JwtPayload>(token);
    if (decoded_token.exp === undefined) return false;

    const date = new Date(0);

    // convert exp time to utc
    const tokenExpDate = date.setUTCSeconds(decoded_token.exp);

    if (tokenExpDate.valueOf() > new Date().valueOf()) {
      return true; //token is valid
    } else {
      return false;
    }
  }

  dateDiffMinutes({ dt1, dt2 }: { dt2: Date; dt1: Date }) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }

  dateDiffMiliseconds({ dt1, dt2 }: { dt2: Date; dt1: Date }) {
    // Convert both dates to milliseconds
    var date1_ms = dt1.getTime();
    var date2_ms = dt2.getTime();

    // Calculate the difference in milliseconds
    return date2_ms - date1_ms;
  }

  constructor(private alertService: AlertService) {}
  clearTimeout: ReturnType<typeof setTimeout> | null = null;

  setCurrentUser() {
    const user = localStorage.getItem(environment.localStorageUserDataKey);
    const jwt = localStorage.getItem(environment.localStorageJwtKey);

    //check if user & jwt exist in local storage
    if (jwt != null && user != null) {
      const authenticatedUser = JSON.parse(user);
      const userJwt = JSON.parse(jwt);

      if (userJwt != null && authenticatedUser != null) {
        this.setAuthenticatedUser(authenticatedUser);
        this.alertService.setIsUserLoggedIn(true);
        this.setJwt(userJwt);
      } else {
        this.setAuthenticatedUser(null);
        this.alertService.setIsUserLoggedIn(false);
        this.setJwt(null);
      }
    } else {
      this.setAuthenticatedUser(null);
      this.alertService.setIsUserLoggedIn(false);
      this.setJwt(null);
    }
  }

  signUp({
    username,
    password,
    email,
  }: {
    username: string;
    password: string;
    email?: string;
  }) {
    return of<SignInResponseData>({
      token: 'asdf',
      sub: '123',
      username,
      email: email,
      roles: ['User'],
      createdAt: 'asfd',
      updatedAt: 'asfd',
    }).pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));

    // return this.http
    //   .post<SignUpResponseData>(`https://api`, user)
    //   .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));
  }

  signIn({ username, password }: { username: string; password: string }) {
    return of<SignInResponseData>({
      token: 'asdf',
      sub: '123',
      username,
      email: 'asf',
      roles: ['User'],
      createdAt: 'asfd',
      updatedAt: 'asfd',
    }).pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));

    // let headers = new HttpHeaders().set('Authorization', 'auth-token');
    // let params = new HttpParams().set('userId', '1');
    // getPosts3(){
    //   this.posts = this.http.get(this.ROOT_URL, '/posts', { params, headers })
    // }
    //   <button (click)="getPosts()"></button>
    //   <div *ngFor="let post of posts | async">
    //
    // return this.http
    //   .post<SignInResponseData>(`https:/api`, {
    //     username,
    //     password,
    //   })
    //   .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));
  }

  private handleUser(response: SignInResponseData) {
    const user: User = {
      id: response.sub,
      roles: response.roles,
      username: response.username,
      email: response.email,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    };
    this.setJwt(response.token);
    this.alertService.setIsUserLoggedIn(true);
    this.setAuthenticatedUser(user);

    // this.autoLogout(response.token);
  }

  getErrorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'An Error Occurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errorMessage));
    }
    switch (errorRes.error.error.message) {
      case 'USERNAME_EXISTS':
        errorMessage = 'Username Already Exists';
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'Email Already Exists';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Password';
        break;
    }
    return throwError(() => new Error(errorMessage));
  }

  refreshToken() {}

  autoLogout(token: string) {
    this.clearTimeout = setTimeout(() => {
      this.logout();
    }, 1000 * 120);
  }

  logout() {
    this._jwtTokenSource$.next(null);
    this.alertService.setIsUserLoggedIn(false);
    this.setAuthenticatedUser(null);
    if (this.clearTimeout) {
      clearTimeout(this.clearTimeout);
    }
  }
}
