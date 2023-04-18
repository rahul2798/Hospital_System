import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { patientModel } from 'src/app/add-patient-detail/add-patient.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patientData: any;
  nameSearch:string=''
patientModelObj: patientModel =new patientModel();
  showButton: boolean =true;
  value: any;


  constructor(private api:ApiService) { }
  array:any

  // patient:any=[
  //   {
  //     "firstName":"mark",
  //     "lastName":"anthony",
  //     "address":"mumbai"
  //   },
  //   {
  //     "firstName":"peter",
  //     "lastName":"parker",
  //     "address":"london"
  //   }
  // ]

  ngOnInit(): void {
    this.getPatient();

    this.api.subject.subscribe((value) => {
      this.value = value;
      this.getPatient();
    });

    // this.array=this.patient
  }

//   getEvent(event:any){
//     if(event.target.value){
//     this.array=this.patient.filter((e:any)=>{
//       return e.firstName.includes(event.target.value);
//     })
//   }else{
//     this.array=this.patient
//   }

// }

getPatient(){
  this.api.getPatientData().subscribe(res=>{
    this.patientData=res
    console.log(this.patientData)
  })
}

deletePatient(data:any){
  console.log(data.id)
  this.api.deletePatientData(data.id).subscribe(res=>{
    alert("Patient Data deleted")
    // console.log("rahul")
    this.getPatient()
  })
}

updatePatient(data:any){
  console.log(data.id)
  this.api.updatePatientData(data,data.id).subscribe(res=>{
    alert("Patient updated")
    console.log("nvjdnv")
    this.getPatient()
  })
}
// new code


updatePatientDetail(){

  this.patientModelObj.firstName=this.editPatientForm.value.firstName;
  this.patientModelObj.lastName=this.editPatientForm.value.lastName;
  this.patientModelObj.phone=this.editPatientForm.value.phone;
  this.patientModelObj.email=this.editPatientForm.value.email;
  this.patientModelObj.address1=this.editPatientForm.value.address1;
  this.patientModelObj.address2=this.editPatientForm.value.adddress2;
  this.patientModelObj.city=this.editPatientForm.value.city;
  this.patientModelObj.state=this.editPatientForm.value.state;
  this.patientModelObj.zipCode=this.editPatientForm.value.Zip;

  this.api.updatePatientData(this.patientModelObj,this.patientModelObj.id).subscribe(res=>{
    alert("Updated Successfully");
    let ref = document.getElementById('cancel')
    ref?.click();
    // this.addPatientDetailForm.reset();
    this.getPatient();
  })


}

onView(data:any){
  this.showButton=false;
  console.log("rahul")
console.log(data.id)
this.patientModelObj.id=data.id
this.editPatientForm.controls['firstName'].setValue(data.firstName)
this.editPatientForm.controls['lastName'].setValue(data.lastName)
this.editPatientForm.controls['email'].setValue(data.email)
this.editPatientForm.controls['phone'].setValue(data.phone)
this.editPatientForm.controls['address1'].setValue(data.address1)
this.editPatientForm.controls['adddress2'].setValue(data.address2)
this.editPatientForm.controls['city'].setValue(data.city)
this.editPatientForm.controls['state'].setValue(data.state)
this.editPatientForm.controls['Zip'].setValue(data.zipCode)
}

editPatientForm=new FormGroup({
  firstName:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required]),
  city:new FormControl('',[Validators.required]),
  lastName:new FormControl('',[Validators.required]),
  address1:new FormControl('',[Validators.required]),
  state:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.required]),
  adddress2:new FormControl('',[Validators.required]),
  Zip:new FormControl('',[Validators.required])
})

onEdit(data:any){
  this.showButton=true
  console.log("rahul")
  console.log(data.id)
  this.patientModelObj.id=data.id
  this.editPatientForm.controls['firstName'].setValue(data.firstName)
  this.editPatientForm.controls['lastName'].setValue(data.lastName)
  this.editPatientForm.controls['email'].setValue(data.email)
  this.editPatientForm.controls['phone'].setValue(data.phone)
  this.editPatientForm.controls['address1'].setValue(data.address1)
  this.editPatientForm.controls['adddress2'].setValue(data.address2)
  this.editPatientForm.controls['city'].setValue(data.city)
  this.editPatientForm.controls['state'].setValue(data.state)
  this.editPatientForm.controls['Zip'].setValue(data.zipCode)
}

}