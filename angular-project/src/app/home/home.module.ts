import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeContentComponent } from './home-content/home-content.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    HomeBannerComponent,
    HomeContentComponent
  ]
})
export class HomeModule { }
