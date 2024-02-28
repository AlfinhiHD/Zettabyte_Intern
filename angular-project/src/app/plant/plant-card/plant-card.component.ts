import { Component, Input, OnInit } from '@angular/core';
import { PlantType } from 'src/app/shared/helpers/interface';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent implements OnInit {
  @Input() plant: PlantType

  constructor() { }

  ngOnInit(): void {
  }

}
