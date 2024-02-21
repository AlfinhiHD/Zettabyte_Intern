import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMenuComponent } from './card-menu/card-menu.component';
import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [
    CardMenuComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardMenuComponent,
    MenuComponent
  ]
})
export class MenuModule { }
