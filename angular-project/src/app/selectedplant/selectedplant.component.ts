import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../shared/service/plant.service';
import { PlantType } from '../shared/helpers/interface';

@Component({
  selector: 'app-selectedplant',
  templateUrl: './selectedplant.component.html',
  styleUrls: ['./selectedplant.component.scss'],
})
export class SelectedPlantComponent implements OnInit {
  plantId: string;
  plant: PlantType;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) {}

  ngOnInit(): void {
    this.plantId = this.route.snapshot.paramMap.get('id');
    this.getPlantDetail(this.plantId);
  }

  getPlantDetail(id: string): void {
    this.plant = this.plantService.getPlantById(id);
  }
}
