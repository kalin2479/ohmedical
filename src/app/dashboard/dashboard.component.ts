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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
	public min = 0;
	public max = 500;
  	public valueMas = 0;
  	public valueFem = 0;
  	public totalpeople = 0;
  	public porcMas = 0;
  	public porcFem = 0;
  	public ratioMas = 0;
  	public ratioFem = 0;

  	public totalconsultations = 0;
  	public totalbusssines = 0;
  	public totalhistory = 0;
  	constructor(private user : UserService) {
  		console.log('primero');
  	}

  	ngOnInit() {
  		console.log('segundo');

  		this.valueMas = 10;
  		this.valueFem = 490;
  		this.totalpeople = this.valueMas + this.valueFem;
  		this.totalconsultations = 300;
  		this.totalbusssines = 40;
  		this.totalhistory = 120;

  		this.ratioMas = this.calculateRatio(this.valueMas);
  		this.ratioFem = this.calculateRatio(this.valueFem);
  		this.porcMas = this.ratioMas * 100;
  		this.porcMas = parseFloat(this.porcMas.toFixed(2));
  		this.porcFem = this.ratioFem * 100;
  		this.porcFem = parseFloat(this.porcFem.toFixed(2));
		this.generatorProgressCircle('#boxProgress','#boxProgressColor', this.ratioMas);
		this.generatorProgressCircle('#boxProgressVenus','#boxProgressColorVenus', this.ratioFem);
	}

	calculateRatio(value){
		let ratio = (value - this.min) / (this.max-this.min);
		return ratio;
	}

  	generatorProgressCircle(element,color,ratio){
		var circle = $(element);
		var color = $(color);
		var ctx = circle[0].getContext('2d');
		var ctxColor = color[0].getContext('2d');
		console.log("Ratio es: " + ratio);
		ctx.beginPath();
		ctx.arc(36,36,28,0,2*Math.PI);
		ctx.strokeStyle = '#dddddd';
		ctx.lineWidth = 10;
		ctx.shadowOffsetX = 2;
		ctx.shadowBlur = 5;
		ctx.shadowColor = 'rgba(0,0,0,.1)';
		ctx.stroke();

		ctxColor.beginPath();
		ctxColor.arc(36,36,28,-1/2*Math.PI,ratio*2*Math.PI -1/2*Math.PI);
		ctxColor.strokeStyle = '#a0d465';
		ctxColor.lineWidth = 10;
		ctxColor.stroke();
  	}



}
