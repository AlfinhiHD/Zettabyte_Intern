import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-motor-banner',
  templateUrl: './motor-banner.component.html',
  styleUrls: ['./motor-banner.component.scss']
})
export class MotorBannerComponent implements OnInit {
  @Output() searchOutput = new EventEmitter<string>();
  @Output() filterStatusOutput = new EventEmitter<string>();
  @Output() filterTypeOutput = new EventEmitter<string>();
  @Output() addFormOutput = new EventEmitter<void>();
  searchTerm: string = ""
  selectedStatus: string = ""
  selectedType: string = ""

  onSearch(value: string): void {
    this.searchOutput.emit(value);
  }

  onFilterStatus() {
    this.filterStatusOutput.emit(this.selectedStatus)
  }

  onFilterType() {
    this.filterTypeOutput.emit(this.selectedType)
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
