import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-exp',
  templateUrl: './list-exp.component.html',
  styleUrls: ['./list-exp.component.css'],
  inputs : ['expList']
})
export class ListExpComponent implements OnInit {

  title = "list";
  expList = [];

  ngOnInit() {

  }

  constructor() { }

}
