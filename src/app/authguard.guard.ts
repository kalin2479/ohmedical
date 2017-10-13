import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthguardGuard implements CanActivate {
  
	constructor (private user : UserService, private router : Router){}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		console.log(localStorage.getItem('isUserLoggedIn'));
		if (localStorage.getItem('isUserLoggedIn')){
			console.log(localStorage.getItem('userName'));
			return true;
		}
		this.router.navigate(['/']);
		console.log('No se ha logueado');
		return false;
		//return this.user.getUserLoggedIn();
	}
}
