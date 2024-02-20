import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';
import { HeroComponent } from './hero/hero.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    FeatureComponent,
    HeroComponent,
    TestimonialComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatureComponent,
    HeroComponent,
    TestimonialComponent,
    HomeComponent
  ]
})
export class HomeModule { }
