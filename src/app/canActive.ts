import { CanActivate,RouterStateSnapshot,UrlTree,ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


export class canActivate implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let a = localStorage.getItem('logged in')?? ''
    return JSON.parse(a)
  }
    
    
  
}