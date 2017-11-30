import { Component, EventEmitter, Output } from '@angular/core';

import { AddExpService } from '../add-exp.service';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css'],
  inputs: ['add']
})
export class AddExpComponent {

	particular = "";
	cost = "";
	date = "";
	category = "";
  	constructor() { }

  	ngOnInit() {

	}

	@Output() addExp = new EventEmitter();

	addNewExp() {
		let newExp = {
			particular: this.particular,
			cost: this.cost,
			date: this.date,
			category: this.category
		};
		this.addExp.emit(newExp);
	}

}
