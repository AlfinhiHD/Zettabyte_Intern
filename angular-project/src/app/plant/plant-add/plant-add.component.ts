import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { PlantType } from 'src/app/shared/helpers/interface';
import { PlantService } from 'src/app/shared/service/plant.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-plant-add',
  templateUrl: './plant-add.component.html',
  styleUrls: ['./plant-add.component.scss'],
})
export class PlantAddComponent implements OnInit {
  newPlant: PlantType = {
    id: '',
    name: '',
    imageUrl: '',
    type: '',
    price: null,
    stock: null,
    description: '',
    rating: null,
  };
  id: string = '';

  constructor(
    private plantService: PlantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   console.log(params);
    //   this.id = params['id'];
    //   console.log(this.id);
    // });
    this.id = this.route.snapshot.queryParams['id'];
    if (!this.id) {
      return;
    }
    const plant = this.plantService.getPlantById(this.id);
    if (plant) {
      this.newPlant = plant;
    } else {
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    if (!this.id) {
      this.newPlant.id = uuidv4();
      const rating = (Math.random() * 0.5 + 4.0).toFixed(1);
      this.newPlant.rating = parseFloat(rating);
      this.plantService.addNewplant(this.newPlant);
    } else {
      this.plantService.updatePlant(this.newPlant);
    }
    this.router.navigate(['/home']);
  }
}
