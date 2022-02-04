import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { AuthService } from "src/app/user/auth.service";
import { ISession } from "../shared";
import { VoterService } from "./voter.service";

@Component({
  selector:"session-list",
  templateUrl:"./session-list.component.html"
})

export class SessionListComponent implements OnChanges{
  @Input() sortBy!:string
  @Input()
  sessions!: ISession[];
  @Input() filterBy!:string
  visibleSessions:ISession[]=[]
  constructor(public auth:AuthService,private voterService:VoterService){}

  ngOnChanges(): void {
    if(this.sessions){
      this.filterSession(this.filterBy)
      this.sortBy==="name"? this.visibleSessions.sort(sortByName):this.visibleSessions.sort(sortByVote)
    }
  }
  toggleVote(session:ISession){
    if(this.userHasVoted(session)){
      this.voterService.deleteVoter(session,this.auth.currentUser.userName)
    }else{
      this.voterService.addVoter(session,this.auth.currentUser.userName)
    }

    if(this.sortBy==='votes'){
      this.visibleSessions.sort(sortByVote)
    }

  }
  userHasVoted(session:ISession){
    return this.voterService.userHasVoted(session,this.auth.currentUser.userName)
  }
  filterSession(filter: any){
    if(filter==='all'){
     this.visibleSessions=this.sessions.slice(0)
    }else{

       this.visibleSessions=this.sessions.filter(session=>{return session.level.toLocaleLowerCase()===filter})

    }
  }

}

function sortByName(s1:ISession,s2:ISession){
 if(s1.name > s1.name){
   return 1
 }
 else if(s1.name===s2.name){
   return 0
 }
 else{
   return -1
 }
}
function sortByVote(s1:ISession,s2:ISession){
  return s2.voters.length-s1.voters.length
}
