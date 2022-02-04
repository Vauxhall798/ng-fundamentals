import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

Injectable()

export class AuthService{
  currentUser!: IUser;
  loginUser(userName:string,_password:string){
    console.log("Working...")
    this.currentUser={
      id:1,
      firstName:'Vishaal',
      lastName:'Arun',
      userName:userName
    }
  }
  isAuthenticate(){
    return !!this.currentUser
  }
  updateCurrentUser(firstName:string,lastName:string){
    this.currentUser.firstName=firstName
    this.currentUser.lastName=lastName

  }
}
