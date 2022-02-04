import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  templateUrl:'./login.component.html',
  styles:[`
  em{
    float:right;
    padding-left:10px;
    color:#E05C65;
  }
  `]
})

export class LoginComponent{

  userName:any
  password:any
  Mouse: boolean = false;

  constructor(public authService:AuthService,public route:Router){}
  login(formValues: any){
    console.log(formValues)
    this.authService.loginUser(formValues.userName,formValues.password)
    this.route.navigate(['events'])
  }
  cancel(){
    this.route.navigate(['events'])
  }
}
