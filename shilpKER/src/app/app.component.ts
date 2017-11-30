import { Component } from '@angular/core';

import { ListExpComponent } from './list-exp/list-exp.component';

import { AddExpService } from './add-exp.service';
import { ListOfExpService } from './list-of-exp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	expList = [];
	particular = "";
	cost = "";
	date = "";
	category = "";

	constructor(
		private addExpService : AddExpService,
		private listOfExpService : ListOfExpService
	) {}

	ngOnInit() {
		this.getExpList();
	}

	getExpList() {
    	this.expList = this.listOfExpService.getListOfExp();
    	console.log(this);
  	}

	addExp2List(newExp){
		this.addExpService.addExp(newExp);
		this.getExpList();
	}

}
