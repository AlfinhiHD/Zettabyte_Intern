import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EmployeeType } from 'src/app/shared/helpers/interface';


@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: EmployeeType

  constructor(private router: Router, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
   }

  ngOnInit(): void {
  }

  goToDetailEmployee(id: string) {
    this.router.navigate(['employee/detail', id]);
  }

  translateRole(role: string): string {
    return this.translate.instant('roles.' + role);
  }

}
