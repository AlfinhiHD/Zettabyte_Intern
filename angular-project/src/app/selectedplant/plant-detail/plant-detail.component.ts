import { Component, Input, OnInit } from '@angular/core';
import { PlantType } from 'src/app/shared/helpers/interface';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})
export class PlantDetailComponent implements OnInit {
  @Input() plant : PlantType

  constructor() { }

  ngOnInit(): void {
  }

}
