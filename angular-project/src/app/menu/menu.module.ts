import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMenuComponent } from './card-menu/card-menu.component';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardMenuComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardMenuComponent,
    MenuComponent
  ]
})
export class MenuModule { }
