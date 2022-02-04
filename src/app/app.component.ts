import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <event-nav></event-nav>
  <router-outlet></router-outlet>

  `
})
export class AppComponent {
  title = 'ng-fundamentals';
}
