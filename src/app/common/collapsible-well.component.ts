import { Component, Input } from "@angular/core";

@Component({
  selector:"collapsible-well",
  template:`
   <div (click)="togglable()" class="pointable well">
     <h4 >
       <ng-content select=".title"></ng-content>
     </h4>
     <ng-content *ngIf="visible" select=".body"></ng-content>
   </div>
  `
})

export class CollapsibleComponent{
  visible:boolean=true
  @Input()
  title!: string;

  togglable(){
    this.visible=!this.visible
  }

}
