import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlantType } from '../helpers/interface';
import { PlantsData } from '../helpers/data';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private plant: BehaviorSubject<PlantType[]> = new BehaviorSubject<
    PlantType[]
  >([]);
  plant$ = this.plant.asObservable();

  constructor() {
    this.plant.next([...this.plant.getValue(), ...PlantsData]);
  }

  addNewplant(plant: PlantType) {
    const newplant: PlantType = { ...plant };
    this.plant.next([...this.plant.getValue(), newplant]);
  }

  deleteplant(id: string) {
    const plantList = this.plant.getValue().filter((plant) => plant.id !== id);
    this.plant.next(plantList);
  }
}
