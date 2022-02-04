
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "./shared/event.service";



@Component({
  selector:"events-list",
  template:`
  <h1>Event List</h1>
  <hr>
  <div class="row">
    <div class="col-md-5" *ngFor="let event of events">
       <event-thumbnail
         [event]="event">
        </event-thumbnail>
    </div>
  </div>
`
})

export class EventListComponent implements OnInit{
  events:any[] | undefined
  constructor(private eventService:EventService,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.events=this.route.snapshot.data['events'];
  }

}
