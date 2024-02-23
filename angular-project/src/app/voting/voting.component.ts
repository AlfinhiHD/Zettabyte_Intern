import { Component, OnInit } from '@angular/core';
import { VotingCard } from './helpers/voting-card.interface';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  votingCards: VotingCard[] = [
    { name: 'Anies & Imin', description: 'Perubahan, Perubahan, dan Perubahan', image: 'https://www.bloombergtechnoz.com/mobile/images/anies-imin2.png', votes: 0 },
    { name: 'Prabowo & Gibran', description: 'Indonesia Emas 20245', image: 'https://www.bloombergtechnoz.com/mobile/images/prabowo-gibran.png', votes: 0 },
    { name: 'Ganjar & Mahfud', description: 'Aman, Adil, Sejahtera', image: 'https://news.files.bbci.co.uk/include/vjeastasia/1473-indonesia-presidential-election-manifesto-2024/assets/app-project-assets/img/cdt2.png??v=1.0.4.202310270506', votes: 0 }
  ];
  
  addNewVoting(votingCard: VotingCard) : void {
    this.votingCards.push(votingCard)
  }

  clearCandidates() : void {
    this.votingCards = [];
  }

  // clearVotes() : void {
  //   this.votingCards.forEach((votingCard) => {
  //     votingCard.votes = 0;
  //   });
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
