import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  
  {path: '',redirectTo:"/home" , pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'signIn', component: SignUpComponent},
  {path:"login",component:LoginPageComponent},
  {path:"patientDetail",component:PatientDetailComponent}
];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
