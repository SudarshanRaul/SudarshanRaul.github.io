import { Injectable } from '@angular/core';

@Injectable()
export class ListOfExpService {

  constructor() {

  }

  getListOfExp() {
  	let expList = [{
		particular: "one",
		cost: 500,
		date: "5 Jan 2013",
		category: "main"
	},{
		particular: "two",
		cost: 510,
		date: "6 Jan 2013",
		category: "main"
	},{
		particular: "three",
		cost: 100,
		date: "8 Jan 2013",
		category: "main"
	},{
		particular: "four",
		cost: 344,
		date: "25 Jan 2013",
		category: "main"
	}];

  	if(!localStorage.getItem("ExpMasterList")) {
  		localStorage.setItem("ExpMasterList", JSON.stringify(expList));
  	} else {
  		expList = JSON.parse(localStorage.getItem("ExpMasterList"));
  	}
	return expList;
  }
}
