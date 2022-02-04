import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector:'event-thumbnail',
  template:`

  <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
     <h2>{{event.name}}</h2>
      <div>Time:{{event.time}}</div>
     <div>ID:{{event.id}}</div>
     <div>Price:{{event.price | currency:"USD"}}</div>
     <div>Address:{{event.location?.address}},{{event.location?.city}},{{event.location?.country}}</div>
  </div>
`,
  styles:[`
  .thumbnail{
    min-height:210px;
  }
  .well div{
    color:#bbb;
  }
  `]
})
export class EventThumbnailComponent{
  @Input()
  event:any
logFoo(): void{
  console.log("Like")
}



}
