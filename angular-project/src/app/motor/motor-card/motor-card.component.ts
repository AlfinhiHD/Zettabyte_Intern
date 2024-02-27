import { Component, Input, OnInit } from '@angular/core';
import { MotorType } from 'src/app/shared/helpers/interface';
import { MotorService } from 'src/app/shared/service/motor/motor.service';

@Component({
  selector: 'app-motor-card',
  templateUrl: './motor-card.component.html',
  styleUrls: ['./motor-card.component.scss']
})
export class MotorCardComponent implements OnInit {
  @Input() motor: MotorType

  constructor(private MotorSevice: MotorService) { }

  ngOnInit(): void {
  }

  addSelectedMotor(motorItem: MotorType): void {
    this.MotorSevice.setSelectedMotor(motorItem)
  }

}
