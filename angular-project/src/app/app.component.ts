import { Component } from '@angular/core';
import { MotorService } from './shared/service/motor/motor.service';
import { MotorType } from './shared/helpers/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  selectedMotor: MotorType | null = null;
  title = 'angular-project';

  constructor(private motorService : MotorService) {
  }

  ngOnInit(): void {
    this.motorService.selectedMotor$.subscribe((motor) => {
      this.selectedMotor = motor;
    })
  }

  
}
