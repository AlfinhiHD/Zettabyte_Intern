import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about.component';



@NgModule({
  declarations: [
    AddressComponent,
    TeamComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
