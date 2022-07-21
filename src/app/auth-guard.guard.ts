import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './services/login.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private auth: LoginService,
    private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggednIn()){
     
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
}