import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apollo-client-learning';
  isSidenavOpen: boolean = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
