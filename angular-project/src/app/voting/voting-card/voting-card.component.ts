import { Component, Input, OnInit } from '@angular/core';
import { VotingCard } from '../helpers/voting-card.interface';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.scss'],
})
export class VotingCardComponent implements OnInit {
  @Input() votingCard: VotingCard;

  votes: number = 0 
  cardWidth: string = '22rem';

  upVote(): void {
    this.votes++;
  }

  constructor() {}

  ngOnInit(): void {}
}
