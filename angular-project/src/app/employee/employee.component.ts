import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/service/employee.service';
import { EmployeeType } from '../shared/helpers/interface';
import { AccentRemovalPipe } from '../shared/pipes/accent-removal/accent-removal.pipe';
import { CombineWordsPipe } from '../shared/pipes/combine-words/combine-words.pipe';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  providers: [AccentRemovalPipe, CombineWordsPipe],
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employeeList: EmployeeType[] = [];
  searchTerm: string = '';

  constructor(
    private employeService: EmployeeService,
    private accentPipe: AccentRemovalPipe,
    private combinePipe: CombineWordsPipe,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  ngOnInit(): void {
    this.employeService.employee$.subscribe((employee) => {
      this.employeeList = employee;
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  get filteredEmployee(): EmployeeType[] {
    return this.employeeList.filter((employee) =>
      this.combinePipe
        .transform(this.accentPipe.transform(employee.name))
        .includes(
          this.combinePipe.transform(this.accentPipe.transform(this.searchTerm))
        )
    );
  }
}
