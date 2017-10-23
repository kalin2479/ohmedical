import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { UserService } from '../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

	name = 'anomy';

	constructor (private router: Router){}
	//constructor(private myAwesomeService : UserService ) { }

	ngOnInit() {
		this.name = localStorage.getItem('userName');
		console.log('El usuario esta: ' + localStorage.getItem('isUserLoggedIn'));
	}
	
	logout(){
		localStorage.removeItem('isUserLoggedIn');
		localStorage.removeItem('userName');
		this.router.navigate(['/']);
	  }
}
