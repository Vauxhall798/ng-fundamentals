import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';
import { AuthService } from './auth.service';

@Component({
  templateUrl:'./profile.component.html',
  styles:[`
  em{
    float:right;
    padding-left:10px;
    color:#E05C65;
  }
  .error input{
    background-color:#E3C3C5
  }
  .error: ms-input-placeholder{color:#999}
  `]
})
export class ProfileComponent implements OnInit {
  constructor(private auth:AuthService,private route:Router,@Inject(TOASTR_TOKEN) private toastr:Toastr){}
  profileForm!: FormGroup;
  ngOnInit(){
    let firstName=new FormControl(this.auth.currentUser.firstName , [Validators.required,Validators.pattern('[a-zA-Z].*')]);
    let lastName=new FormControl(this.auth.currentUser.lastName, Validators.required);
   this.profileForm=new FormGroup({
     firstName:firstName,
     lastName:lastName
   })

  }
  cancel(){
   this.route.navigate(['events'])
  }
  saveProfile(formValues:any){
    if(this.profileForm.valid){
    this.auth.updateCurrentUser(formValues.firstName,formValues.lastName)
    this.toastr.success("Profile Saved")
  }
  }

}
