import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPatientDetailComponent } from './add-patient-detail/add-patient-detail.component';
import { FilterPipe } from './filter.pipe';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SignUpComponent } from './components/sign-up/sign-up.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PatientDetailComponent,
    PatientListComponent,
    AddPatientDetailComponent,
    FilterPipe,
    HomePageComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    
    HttpClientModule,
    
    
  
    
   
 

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
