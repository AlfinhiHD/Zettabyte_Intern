import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantType } from 'src/app/shared/helpers/interface';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent implements OnInit {
  @Input() plant: PlantType

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetailPlant(id: string) {
    this.router.navigate(['/detail', id]);
  }

}
