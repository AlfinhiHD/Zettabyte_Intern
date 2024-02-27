import { Component, Input, OnInit } from '@angular/core';
import { MotorType } from 'src/app/shared/helpers/interface';
import { MotorService } from 'src/app/shared/service/motor/motor.service';

@Component({
  selector: 'app-motor-detail',
  templateUrl: './motor-detail.component.html',
  styleUrls: ['./motor-detail.component.scss']
})
export class MotorDetailComponent implements OnInit {
  @Input() selectedMotor: MotorType | null = null;
  ;

  constructor(private motorService: MotorService) { }

  ngOnInit(): void {
  }

  updateStatus(status: string): void {
    if (this.selectedMotor) {
      const newStatus = status === 'Tersedia' ? 'Dipinjam' : 'Tersedia';
      this.motorService.updateMotorStatus(newStatus);
    }
  }

  handleDeleteMotor(policeNumber: string): void {
    this.motorService.deleteMotor(policeNumber);
  }

  closeSelectedMotor(): void {
    this.motorService.closeSelectedMotor();
  }
}
