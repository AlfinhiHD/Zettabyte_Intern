import { Component, OnInit } from '@angular/core';
import { MotorService } from '../shared/service/motor/motor.service';
import { MotorType } from '../shared/helpers/interface';

@Component({
  selector: 'app-selectedmotor',
  templateUrl: './selectedmotor.component.html',
  styleUrls: ['./selectedmotor.component.scss']
})
export class SelectedmotorComponent implements OnInit {

  selectedMotor: MotorType | null = null;

  constructor(private motorService: MotorService) { }

  ngOnInit(): void {
    this.motorService.selectedMotor$.subscribe((motor) => {
      this.selectedMotor = motor;
    })
  }

}
