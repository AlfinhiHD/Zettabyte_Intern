import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppRoutingModule } from '../app-routing.module';
import { AccentRemovalPipe } from './pipes/accent-removal/accent-removal.pipe';
import { CombineWordsPipe } from './pipes/combine-words/combine-words.pipe';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    AccentRemovalPipe,
    CombineWordsPipe
    
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    AccentRemovalPipe,
    CombineWordsPipe
  ]
})
export class SharedModule { }
