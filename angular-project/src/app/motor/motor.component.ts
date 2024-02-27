import { Component, OnInit } from '@angular/core';
import { MotorService } from '../shared/service/motor/motor.service';
import { MotorType } from '../shared/helpers/interface';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorComponent implements OnInit {
  motorList: MotorType[] = [];

  searchTerm: string = '';

  constructor(private MotorService: MotorService) {}

  ngOnInit(): void {
    this.MotorService.motor$.subscribe(motor => {
      this.motorList = motor
    })
  }

  searchMotor(searchTerm: string): void {
    this.searchTerm = searchTerm
  }

  get filteredMotor(): MotorType[] {
    return this.motorList.filter(motor => motor.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

}
