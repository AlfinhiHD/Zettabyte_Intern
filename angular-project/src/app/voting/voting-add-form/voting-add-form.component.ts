import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VotingCard } from '../helpers/voting-card.interface';

@Component({
  selector: 'app-voting-add-form',
  templateUrl: './voting-add-form.component.html',
  styleUrls: ['./voting-add-form.component.scss']
})
export class VotingAddFormComponent implements OnInit {

  @Output() addNewVoting: EventEmitter<VotingCard> = new EventEmitter<VotingCard>();

  newVoting: VotingCard = { name: '', description: '', votes: 0, image: '' };

  submitForm(): void {
    this.addNewVoting.emit(this.newVoting);
    this.newVoting = { name: '', description: '', votes: 0, image: '' };
  }

  constructor() { }

  ngOnInit(): void {
  }

}
