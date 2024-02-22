import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchTerm: string = '';

  onSearch(): void {
    this.search.emit(this.searchTerm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
