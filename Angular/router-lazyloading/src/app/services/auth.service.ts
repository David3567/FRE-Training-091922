import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject({ username: 'Tom', role: 'User' });

  get userAuth() {
    return this.user$.getValue();
  }

  constructor() {}
}
