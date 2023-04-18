import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';

import { patientModel } from '../add-patient-detail/add-patient.model';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

patientModelObj: patientModel =new patientModel();
patientData: any;
searchText:any
  array: any;
  searchQuery:any;
  showNav:boolean=false

  nameSearch:string='';
  showButton:boolean=true;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getPatient();

  }

  sideNav(){
    this.showNav=! this.showNav
  }

  logout(){
    console.log("gshcbs")
    localStorage.removeItem("signUpUsers")
    this.router.navigate(['/login']);
  }

  getPatient(){
    this.api.getPatientData().subscribe(res=>{
      this.patientData=res
      console.log(this.patientData)
    })
  }

 

   

}
