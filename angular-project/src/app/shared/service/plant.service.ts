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
    this.plant.next([...this.plant.getValue(), plant]);
  }

  deleteplant(id: string) {
    const plantList = this.plant.getValue().filter((plant) => plant.id !== id);
    this.plant.next(plantList);
  }

  getPlantById(id: string) {
    return this.plant.getValue().find((plant) => plant.id === id);
  }
  updatePlant(updatedPlant: PlantType) {
    const plants = this.plant.getValue();
    const index = plants.findIndex((plant) => plant.id === updatedPlant.id);
    if (index !== -1) {
      plants[index] = updatedPlant;
      this.plant.next([...plants]);
    }
  }
}
