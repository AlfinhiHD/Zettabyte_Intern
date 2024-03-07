import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    NotFoundComponent,
    MatListModule,
    MatButtonModule
  ],
})
export class SharedModule {}
