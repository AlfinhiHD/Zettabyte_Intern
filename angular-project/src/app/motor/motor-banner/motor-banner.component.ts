import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-motor-banner',
  templateUrl: './motor-banner.component.html',
  styleUrls: ['./motor-banner.component.scss']
})
export class MotorBannerComponent implements OnInit {
  @Output() searchOutput = new EventEmitter<string>();
  searchTerm: string = ""

  onSearch(): void {
    this.searchOutput.emit(this.searchTerm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
