import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ISession } from "../shared";
import { EventService } from "../shared/event.service";
@Component({
  templateUrl:'./event-details.component.html',
  styles:[`
  .container{
    padding-left:20px;
    padding-right:20px;
  }
  .event-image{
    height:100px;
  }`]

})
export class EventDetailsComponent implements OnInit{
  addMode!: boolean;
  event:any
  filterBy:string="all"
  sortBy:string="votes"
  constructor(private eventService:EventService,private _route:ActivatedRoute){

  }
   ngOnInit(){
      this._route.params.forEach((params:Params)=>{
        this.event=this.eventService.getEvent(+params['id'])
        this.addMode=false;
      })

   }
   addSessions(){
     this.addMode=true

   }
   saveNewSession(session:ISession){
     const nextId=Math.max.apply(null,this.event.sessions.map((s: { id: any; }) => s.id))
     session.id=nextId+1;
     this.event.sessions.push(session)
     this.eventService.updateEvent(this.event)
     this.addMode=false;
   }
}
