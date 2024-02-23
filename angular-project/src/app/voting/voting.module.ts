import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingComponent } from './voting.component';
import { VotingCardComponent } from './voting-card/voting-card.component';
import { VotingAddFormComponent } from './voting-add-form/voting-add-form.component';
import { VotingBannerComponent } from './voting-banner/voting-banner.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VotingComponent,
    VotingCardComponent,
    VotingAddFormComponent,
    VotingBannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VotingComponent,
    VotingCardComponent,
    VotingAddFormComponent,
    VotingBannerComponent
  ]
})
export class VotingModule { }
