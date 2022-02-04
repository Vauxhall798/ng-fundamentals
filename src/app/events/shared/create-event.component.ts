import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./event.service";

@Component({
  templateUrl:'./create-event.component.html',
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
export class CreateEventComponent{

  isDirty:boolean=true
  newEvent: any



  constructor(private router:Router,private eventService:EventService){}

  saveEvent(formValues:any){
    this.eventService.saveEvent(formValues)
    this.isDirty=false;
    this.router.navigate(['/events'])
  }

  cancel(){
    this.router.navigate(['/events'])
  }

}
