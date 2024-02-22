import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  @Input() hero: any ={};

  cardWidth: string = "25rem"

  constructor() { }

  ngOnInit(): void {
  }

}
