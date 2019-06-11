import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './submit-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastContainerModule  } from 'ngx-toastr';
import { AlertComponent } from './alert/alert.component';

//import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { TrimValueAccessorModule } from 'ng-trim-value-accessor';

import {MaterialModule} from 'src/material.module';

// import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({ positionClass: 'inline' }), // ToastrModule added
    ToastContainerModule,
    //MDBBootstrapModule.forRoot(),
    TrimValueAccessorModule,
    MaterialModule
    // MatButtonModule,
    // MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
