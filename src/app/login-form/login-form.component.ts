import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
	private accessUser : any;
	constructor(
		private router : Router, 
		private route : ActivatedRoute,
		private user : UserService
	) { }

	ngOnInit() {
		this.accessUser = localStorage.getItem('isUserLoggedIn');
		if(this.accessUser){
			this.router.navigate(['/dashboard']);
		}
		console.log("xx"+ this.accessUser);
		//localStorage.removeItem('isUserLoggedIn');
		//localStorage.removeItem('userName');
		this.route.snapshot.queryParams['returnUrl'];
		console.log('verificamos que la vareble de session no este activa');
		// implementar el redireccionamiento
	}
	
	public loginUser(e){
		e.preventDefault(); //Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo
		//console.log(e.target);
		let dataForm = e.target.elements; 
		let username = dataForm[0].value;
		let password = dataForm[1].value;
		let dataUser;	
		//console.log(username, password);
		if (username == 'admin' && password == 'admin'){
			console.log('ingreso');
			dataUser = [
				{
					id : 1,
					name : 'Carlos Espinoza',
					username : 'Kalin'	
				}
			]

			this.user.setUserLoggedIn(dataUser);
			//Lo que estamos indicando es que se diriga al dashboard
			this.router.navigate(['/dashboard']);
		}else{
			console.log('no ingreso');
		}
	}
}
