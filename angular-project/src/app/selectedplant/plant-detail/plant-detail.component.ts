import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantType } from 'src/app/shared/helpers/interface';
import { PlantService } from 'src/app/shared/service/plant.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss'],
})
export class PlantDetailComponent implements OnInit {
  @Input() plant: PlantType;

  constructor(private plantService: PlantService, private router: Router) {}

  ngOnInit(): void {}

  onDeletePlant(id: string): void {
    this.plantService.deleteplant(id);
    this.router.navigate(['/home']);
  }
}
