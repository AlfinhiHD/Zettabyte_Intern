import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { VotingCard } from '../helpers/voting-card.interface';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.scss'],
})
export class VotingCardComponent implements OnInit, OnDestroy{
  @Input() votingCard: VotingCard;
  
  banteng: boolean = false
  votes: number = 0 
  cardWidth: string = '';

  upVote(): void {
    this.votes++;
  }
  constructor() {}

  ngOnInit(): void {
    this.cardWidth = "20rem"
    // console.log("Ini child")
  }

  ngAfterViewInit() {
    alert("Ini AfterViewInit child card nya si " + this.votingCard.name)
    if(this.votingCard.name === "Ganjar & Mahfud") {
      this.banteng = !this.banteng;
    }
  }
  

  ngOnDestroy(): void {
    alert("Berhasil menghapus data candidates dengan nama " + this.votingCard.name)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    alert("Data candidates " + this.votingCard.name + " Berhasil ditambahkan")
  }

}
