import { Component, OnInit } from '@angular/core';
//import { UserService } from '../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	name = 'anomy';

	constructor() { }
	//constructor(private myAwesomeService : UserService ) { }

	ngOnInit() {
		this.name = localStorage.getItem('userName');
		console.log('El usuario esta: ' + localStorage.getItem('isUserLoggedIn'));
	}

}
