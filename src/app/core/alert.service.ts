import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private _isUserLoggedInSource$ = new BehaviorSubject<boolean>(false);
  isUserLoggedIn$ = this._isUserLoggedInSource$.asObservable();
  // *ngIf="authService.isLoggedIn$ | async"

  constructor() {}

  setIsUserLoggedIn(authStatus: boolean) {
    this._isUserLoggedInSource$.next(authStatus);
  }

  // isAuthenticated() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.isLoggedIn);
  //     }, 1000);
  //   });
  // }
}
