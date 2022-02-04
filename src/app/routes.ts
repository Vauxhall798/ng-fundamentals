import { Routes } from "@angular/router";
import { Error404Component } from "./errors/error.component";
import { CreateSession } from "./events/event-details/create-session.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventResolver } from "./events/event-list-resolver.service";
import { EventListComponent } from "./events/event-list.component";
import { CreateEventComponent } from "./events/shared/create-event.component";

export const appRoutes:Routes=[
  {path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateEvent']},
  {path:'events',component:EventListComponent,resolve:{events:EventResolver}},
  {path:'404',component:Error404Component},
  {path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
  {path:'events/session/new',component:CreateSession},
  {path:'',redirectTo:'/events',pathMatch:'full'},
  {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)}
]
