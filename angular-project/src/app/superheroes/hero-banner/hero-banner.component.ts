import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HeroBannerComponent implements OnInit {

  @Output() searchOutput = new EventEmitter<string>();

  searchTerm: string = '';

  onSearch(): void {
    this.searchOutput.emit(this.searchTerm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
