import { Component, OnInit } from '@angular/core';
import { MotorType } from 'src/app/shared/helpers/interface';
import { MotorService } from 'src/app/shared/service/motor/motor.service';

@Component({
  selector: 'app-motor-addform',
  templateUrl: './motor-addform.component.html',
  styleUrls: ['./motor-addform.component.scss'],
})
export class MotorAddformComponent implements OnInit {
  newMotor: MotorType = {
    image: '',
    policeNumber: '',
    name: '',
    type: '',
    createdYear: null,
    colour: '',
    cc: null,
    description: '',
  };

  constructor(private motorService: MotorService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.motorService.addNewMotor(this.newMotor);
    this.newMotor = {
      image: '',
      policeNumber: '',
      name: '',
      type: '',
      createdYear: null,
      colour: '',
      cc: null,
      description: '',
    };
  }
}
