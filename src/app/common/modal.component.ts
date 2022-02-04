import { Component, ElementRef, Inject, Input, ViewChild } from "@angular/core";
import { JQ_TOKEN } from ".";


@Component({
  selector:"modal",
  template:`
   <div class="modal fade" #modalContainer id="simple-modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button class="close" data-dismiss="modal" type="button">
            <span>&times;</span>
          </button>
          <h4 class="modal-title">
            {{title}}
          </h4>
        </div>
        <div class="modal-body" (click)="closeModel()">
         <ng-content></ng-content>
        </div>
      </div>
    </div>
   </div>
  `,
  styles:[`
   .modal-body{
     height:250px;
     overflow-y:scroll;
   }
  `]

})

export class ModalComponent{
@Input() title!:string
@ViewChild('modalContainer') conEl!:ElementRef
constructor(@Inject(JQ_TOKEN) private $:any){}

closeModel(){
  this.$(this.conEl.nativeElement).modal('hide')
}
}
