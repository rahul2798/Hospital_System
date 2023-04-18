import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  signupUsers:any[] = [];

  loginObj:any = {
    email:'',
    password:'',
  }

  constructor(private router:Router) { }

  ngOnInit(): void {  
  }

  loginForm= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
    // tick:new FormControl('',[Validators.required])
  })

  loginUser(){
    console.log(this.loginObj)
    console.log(this.loginObj.email)
    console.log(this.loginObj.password)

    const localData= localStorage.getItem('signUpUsers');
    console.log(localData);
    if(localData != null){
      
      this.signupUsers = JSON.parse(localData)
    }
    //
    // console.warn(this.loginForm.value);
    const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);

    if(isUserExist != undefined) {
      alert("User Login Successfully");
    this.router.navigate(['/patientDetail']);

    }else{
      alert("wrong credentials");
    }
  }

  register(){
    this.router.navigate(['/signIn']);
  }



}
