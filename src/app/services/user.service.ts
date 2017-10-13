import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

	//private isUserLoggedIn = false;
	//public username;

	constructor() { 
		//this.isUserLoggedIn = false;
	}

	public setUserLoggedIn(data){
		//this.isUserLoggedIn = true;
		localStorage.setItem('isUserLoggedIn', 'true');
		localStorage.setItem('userName', data[0].username);
		//this.username = 'Carlos Espinoza';
	}
	/*
	public getUserLoggedIn(){
		return this.isUserLoggedIn;
	}
	*/

	public setUserLogout(){
		localStorage.removeItem('isUserLoggedIn');
		localStorage.removeItem('userName');
	}

}
