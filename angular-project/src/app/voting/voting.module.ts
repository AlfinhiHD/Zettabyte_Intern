import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingComponent } from './voting.component';
import { VotingCardComponent } from './voting-card/voting-card.component';
import { VotingAddFormComponent } from './voting-add-form/voting-add-form.component';
import { VotingBannerComponent } from './voting-banner/voting-banner.component';



@NgModule({
  declarations: [
    VotingComponent,
    VotingCardComponent,
    VotingAddFormComponent,
    VotingBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VotingComponent,
    VotingCardComponent,
    VotingAddFormComponent,
    VotingBannerComponent
  ]
})
export class VotingModule { }
