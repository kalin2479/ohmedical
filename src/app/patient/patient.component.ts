import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

/*
	Declaramos la variable JQuery es que vamos a querer utilizarlo
	en vez del dolar sino declaramos el dolar. 
	He indicamos que es de tipo any , para indicar que no me fuerce a que
	sea de un tpo en especifico sino por el contrario puede ser cualquier cosa.
*/
declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.styl']
})
export class PatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
