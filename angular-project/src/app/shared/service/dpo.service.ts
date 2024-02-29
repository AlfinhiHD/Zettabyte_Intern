import { Injectable } from '@angular/core';
import { DPOType } from '../helpers/interface';
import { BehaviorSubject } from 'rxjs';
import { DPOData } from '../helpers/data';

@Injectable({
  providedIn: 'root'
})
export class DpoService {
  private dpo: BehaviorSubject<DPOType[]> = new BehaviorSubject<
    DPOType[]
  >([]);
  dpo$ = this.dpo.asObservable();

  constructor() {
    this.dpo.next([...this.dpo.getValue(), ...DPOData]);
  }

  addNewdpo(dpo: DPOType) {
    this.dpo.next([...this.dpo.getValue(), dpo]);
  }

  deletedpo(id: string) {
    const dpoList = this.dpo.getValue().filter((dpo) => dpo.id !== id);
    this.dpo.next(dpoList);
  }

  getdpoById(id: string) {
    return this.dpo.getValue().find((dpo) => dpo.id === id);
  }
  updatedpo(updateddpo: DPOType) {
    const dpos = this.dpo.getValue();
    const index = dpos.findIndex((dpo) => dpo.id === updateddpo.id);
    if (index !== -1) {
      dpos[index] = updateddpo;
      this.dpo.next([...dpos]);
    }
  }
}
