import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { VotingCard } from './helpers/voting-card.interface';
import { votingCardsPreData } from './helpers/voting-card.data';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  votingCards: VotingCard[] = [];
  
  addNewVoting(votingCard: VotingCard) : void {
    this.votingCards.push(votingCard)
    this.votingCards[0].name = "Alfin"
  }
  ngAfterViewInit() {
    alert("Ini AfterviewInit si Parent, terakhir sendiri harusnya setelah child nya")
    console.log("masuk view parent")
  }

  clearCandidates() : void {
    this.votingCards = [];
  }

  constructor() { }

  ngOnInit(): void {
    alert("Inisialisasi pertama dlu gaes (parent)")
    this.votingCards = [...this.votingCards, ...votingCardsPreData];
  }  

  

}
