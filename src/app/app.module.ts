import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ModalComponent } from './common/modal.component';
import { ModalTriggerDirective } from './common/modalTrigger.directive';
import { Error404Component } from './errors/error.component';
import { CreateSession } from './events/event-details/create-session.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { SessionListComponent } from './events/event-details/session-list.component';
import { EventResolver } from './events/event-list-resolver.service';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { EventService } from './events/shared/event.service';
import { navComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import {TOASTR_TOKEN,Toastr,CollapsibleComponent,JQ_TOKEN} from 'src/app/common/index';
import { UpVoteComponent } from './events/event-details/upvote.component';
import { VoterService } from './events/event-details/voter.service';
import {HttpClientModule} from '@angular/common/http'


 declare let toastr:Toastr;
 declare let jQuery:any

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    navComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSession,
    SessionListComponent,
    CollapsibleComponent,
    DurationPipe,
    ModalComponent,
    ModalTriggerDirective,
    UpVoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EventService,
    EventRouteActivator,
    EventResolver,
    AuthService,
  {provide:'canDeactivateEvent',useValue:checkState},
  {provide:TOASTR_TOKEN,useValue:toastr},
  {provide:JQ_TOKEN,useValue:jQuery},
   VoterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkState(Check:CreateEventComponent) {


  if(Check.isDirty){
    return window.confirm('Do you Want to Cancel?')
  }
  return true;
}
