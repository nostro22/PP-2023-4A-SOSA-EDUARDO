import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from './app/servicios/firestore.service';
import { Usuario } from './app/clases/usuario';


@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad, CanMatch {
  constructor(private firebase:FirestoreService, private router:Router){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const isUsuario = await this.firebase.esUsuario();
    if (isUsuario) {
      console.log('Usuario is admin:', isUsuario);
      return true; 
    } else {
      return this.router.parseUrl('/usuario/ingreso');
    }
  }
  
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
