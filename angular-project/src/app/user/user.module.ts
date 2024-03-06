import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    UserComponent,
    UserCardComponent,
    UserFormComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent,
    UserCardComponent,
    UserFormComponent,
    UserDetailComponent
  ]
})
export class UserModule { }
