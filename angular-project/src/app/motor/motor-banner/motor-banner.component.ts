import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-motor-banner',
  templateUrl: './motor-banner.component.html',
  styleUrls: ['./motor-banner.component.scss']
})
export class MotorBannerComponent implements OnInit {
  @Output() searchOutput = new EventEmitter<string>();
  @Output() filterOutput = new EventEmitter<string>();
  searchTerm: string = ""
  selectedStatus: string = ""

  onSearch(value: string): void {
    this.searchOutput.emit(value);
  }

  onFilterStatus() {
    this.filterOutput.emit(this.selectedStatus)
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
