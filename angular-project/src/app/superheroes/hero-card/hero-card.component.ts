import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../helpers/hero.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero;

  cardWidth: string = "22rem"
  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
