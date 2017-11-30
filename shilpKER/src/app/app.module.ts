import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListExpComponent } from './list-exp/list-exp.component';
import { AddExpComponent } from './add-exp/add-exp.component';

import { ListOfExpService } from './list-of-exp.service';
import { AddExpService } from './add-exp.service';


@NgModule({
  declarations: [
    AppComponent,
    ListExpComponent,
    AddExpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ListOfExpService,
    AddExpService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
