import { Component, OnInit } from '@angular/core';
import { PlantService } from '../shared/service/plant.service';
import { PlantType } from '../shared/helpers/interface';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {
  plantList: PlantType[] = []

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.plantService.plant$.subscribe((plant) => {
      this.plantList = plant
    })
  }

}
