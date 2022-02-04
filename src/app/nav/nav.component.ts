import { Component } from "@angular/core";
import { ISession } from "../events/shared";
import { EventService } from "../events/shared/event.service";
import { AuthService } from "../user/auth.service";

@Component({
  selector:"event-nav",
  templateUrl:"./nav.component.html",
  styles:[`
  .nav .navbar-nav{
    font-size:15px;
  }
  #searchForm{
    margin-right:100px;
  }
  li > a.active{
    color:#F97924;
  }
  @media(max-width:1200px){
    #searchForm{
      display:none;
    }
  }

  `]
})


export class navComponent{
  searchTerms:string=""
  foundSession!:ISession[]
  constructor(public auth:AuthService,private eventService:EventService){}
  searchSessions(searchTerms: any){
    this.eventService.searchSessions(searchTerms).subscribe((session: ISession[])=>{
      this.foundSession=session;
      console.log(this.foundSession);
    })
  }

}
