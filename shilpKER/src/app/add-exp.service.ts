import { Injectable } from '@angular/core';

@Injectable()
export class AddExpService {

  constructor() { }

  addExp(exp) {
  	console.log("service");
  	console.log(exp);

  	let expMasterList = JSON.parse(localStorage.getItem("ExpMasterList"));
  	expMasterList.push(exp);
  	localStorage.setItem("ExpMasterList", JSON.stringify(expMasterList));
  }

}
