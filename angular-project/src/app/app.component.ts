import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from './form/dialog-content/dialog-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-project';
  isSidenavOpen: boolean = true;

  constructor(private dialog: MatDialog) {

  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '100vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log('Form data:', result);
    });
  }

  
}
