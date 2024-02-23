import { Component, OnInit } from '@angular/core';
import { VotingCard } from './helpers/voting-card.interface';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  votingCards: VotingCard[] = [
    { name: 'John Doe', description: 'Front-end Developer', image: 'https://via.placeholder.com/150', votes: 0 },
    { name: 'Jane Doe', description: 'Back-end Developer', image: 'https://via.placeholder.com/150', votes: 0 },
    { name: 'Alice Smith', description: 'UI/UX Designer', image: 'https://via.placeholder.com/150', votes: 0 }
  ];

  // addCard(): void {
  //   this.votingCards.push({ name: this.newName, description: this.newDescription, image: this.newImage, votes: 0 });
  //   this.newName = '';
  //   this.newDescription = '';
  //   this.newImage = '';
  // }

  
  addNewVoting(votingCard: VotingCard) : void {
    this.votingCards.push(votingCard)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
