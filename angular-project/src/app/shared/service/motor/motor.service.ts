import { Injectable } from '@angular/core';
import { MotorType } from '../../helpers/interface';
import { BehaviorSubject } from 'rxjs';
import { MotorData } from '../../helpers/data';

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  motor: BehaviorSubject<MotorType[]> = new BehaviorSubject<MotorType[]>([]);
  motor$ = this.motor.asObservable();

  selectedMotor: BehaviorSubject<MotorType | null> = new BehaviorSubject<MotorType | null>(null);
  selectedMotor$ = this.selectedMotor.asObservable();

  constructor() {
    this.motor.next([...this.motor.getValue(), ...MotorData]);
  }

  setSelectedMotor(data: MotorType) {
    this.selectedMotor.next(data)
  }

  updateMotorStatus(status: string) {
    const selectedMotor = this.selectedMotor.getValue();
    if (selectedMotor) {
      const updatedMotor = { ...selectedMotor, status: status };
      const motorList = this.motor.getValue().map(motor => motor.policeNumber === selectedMotor.policeNumber ? updatedMotor : motor);
      this.motor.next(motorList);
      this.selectedMotor.next(updatedMotor);
    }
  }

  addNewMotor(motor: MotorType) {
    const newMotor: MotorType = {...motor, status: "Tersedia"};
    this.motor.next([...this.motor.getValue(), newMotor])
  }

  closeSelectedMotor() {
    this.selectedMotor.next(null)
  }
}
