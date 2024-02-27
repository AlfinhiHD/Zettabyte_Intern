import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MotorModule } from './motor/motor.module';
import { SelectedmotorModule } from './selectedmotor/selectedmotor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MotorModule,
    SelectedmotorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
