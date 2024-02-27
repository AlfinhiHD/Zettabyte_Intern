import { Component, Input, OnInit } from '@angular/core';
import { MotorType } from 'src/app/shared/helpers/interface';

@Component({
  selector: 'app-motor-detail',
  templateUrl: './motor-detail.component.html',
  styleUrls: ['./motor-detail.component.scss']
})
export class MotorDetailComponent implements OnInit {
  @Input() selectedMotor: MotorType | null = null;
  ;

  constructor() { }

  ngOnInit(): void {
  }

}
