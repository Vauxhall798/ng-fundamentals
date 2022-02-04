
import { Component, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EventEmitter } from "@angular/core";
import { ISession } from "../shared";

@Component({
  selector:"create-session",
  templateUrl:'./create-session.component.html',
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

export class CreateSession implements OnInit{

  @Output() saveNewSession=new EventEmitter();

  newSessionForm!: FormGroup;
  name!: FormControl
  presenter!: FormControl
  duration!: FormControl
  level!: FormControl
  abstract!: FormControl

  ngOnInit(): void {
      this.name=new FormControl('',Validators.required)
      this.presenter=new FormControl('',Validators.required)
      this.duration=new FormControl('',Validators.required)
      this.level=new FormControl('',Validators.required)
      this.abstract=new FormControl('',[Validators.required,Validators.maxLength(400),this.restrictWords])

       this.newSessionForm=new FormGroup({
         name:this.name,
         presenter:this.presenter,
         duration:this.duration,
         level:this.level,
         abstract:this.abstract
       })
  }
  saveSession(formValues:any){
   let session:ISession={
     id:undefined,
     name:formValues.name,
     duration:formValues.duration,
     presenter:formValues.presenter,
     level:formValues.level,
     abstract:formValues.abstract,
     voters:[],
     eventId:undefined
   }
   this.saveNewSession.emit(session);
  }
  private restrictWords(control:FormControl):{[key:string]:any}{
    return control.value.includes('foo')
    ?{'restrictWords':'foo'}
    :{'Nowords':'Cringe'}
  }

}
