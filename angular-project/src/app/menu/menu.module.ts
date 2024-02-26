import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { CardMenuComponent } from './card-menu/card-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';



@NgModule({
  declarations: [
    MenuComponent,
    CardMenuComponent,
    HeaderMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    CardMenuComponent,
    HeaderMenuComponent
  ]
})
export class MenuModule { }
