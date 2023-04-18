import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { patientModel } from './add-patient.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-add-patient-detail',
  templateUrl: './add-patient-detail.component.html',
  styleUrls: ['./add-patient-detail.component.css']
})
export class AddPatientDetailComponent  {

patientModelObj: patientModel =new patientModel();
  patientData: any;
  
  
  
  constructor(private api:ApiService) {
    
  }

  

  addPatientDetailForm= new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    address1:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    adddress2:new FormControl('',[Validators.required]),
    zipCode:new FormControl('',[Validators.required])

  })

  onSubmit(){
   
    console.log("rahullll")
    console.log(this.addPatientDetailForm.value);
    this.patientModelObj.firstName=this.addPatientDetailForm.value.firstName;
    this.patientModelObj.lastName=this.addPatientDetailForm.value.lastName;
    this.patientModelObj.phone=this.addPatientDetailForm.value.phone;
    this.patientModelObj.email=this.addPatientDetailForm.value.email;
    this.patientModelObj.address1=this.addPatientDetailForm.value.address1;
    this.patientModelObj.address2=this.addPatientDetailForm.value.adddress2;
    this.patientModelObj.city=this.addPatientDetailForm.value.city;
    this.patientModelObj.state=this.addPatientDetailForm.value.state;
    this.patientModelObj.zipCode=this.addPatientDetailForm.value.zipCode;

    
    this.api.postPatientData(this.patientModelObj)

    .subscribe(res=>{
     
      console.log(res);
      alert("Patient added successfully")
      this.addPatientDetailForm.reset();
      this.api.subject.next('true')
      this.getPatient();
    },
    err=>{
      alert("Someting error")
    })

  }
  getPatient(){
    this.api.getPatientData().subscribe(res=>{
      this.patientData=res
      console.log(this.patientData)
    })
  }
  
}
