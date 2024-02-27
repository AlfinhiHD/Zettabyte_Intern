import { Component, OnInit } from '@angular/core';
import { MotorService } from '../shared/service/motor/motor.service';
import { MotorType } from '../shared/helpers/interface';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss'],
})
export class MotorComponent implements OnInit {
  motorList: MotorType[] = [];

  searchTerm: string = '';
  statusTerm: string = '';

  constructor(private motorService: MotorService) {}

  ngOnInit(): void {
    this.motorService.motor$.subscribe((motor) => {
      this.motorList = motor;
    });
  }

  searchMotor(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  filterStatusMotor(statusTerm: string): void {
    this.statusTerm = statusTerm;
  }

  get filteredMotor(): MotorType[] {
    return this.motorList.filter(
      (motor) =>
        motor.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.statusTerm === '' ||
          motor.status.toLowerCase() === this.statusTerm.toLowerCase())
    );
  }
}
