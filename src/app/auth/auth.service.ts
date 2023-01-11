import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel} from "./models/login.model";
import {Observable, of} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthorized: boolean = false;

  public get isAuthorized(): boolean {
    return this._isAuthorized;
  }

  private set isAuthorized(value: boolean) {
    this._isAuthorized = value;
    this.router.navigate([this.isAuthorized ? 'main' : 'auth/login']);
  }

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) {
  }

  public login(model: LoginModel): Observable<boolean> {

    console.log(environment.apiUrl);

    let result: boolean = false;
    if(model.email == '1111@test.ru' && model.password == '1111') {
      result = true;
    }
    this.isAuthorized = result;
    return of(result);
  }

  public logout(): void {
    this.isAuthorized = false;
  }
}