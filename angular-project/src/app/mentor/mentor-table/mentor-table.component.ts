import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MentorType } from 'src/app/shared/helpers/interface';
import { MentorService } from 'src/app/shared/service/mentor.service';

@Component({
  selector: 'app-mentor-table',
  templateUrl: './mentor-table.component.html',
  styleUrls: ['./mentor-table.component.scss'],
})
export class MentorTableComponent implements OnInit, AfterViewInit {
  mentorList: MentorType[] = [];
  dataSource = new MatTableDataSource<MentorType>(this.mentorList);
  sortedData: MentorType[] = [];

  searchValue: string = '';
  statusValue: string = '';
  civilityValue: string = '';

  selectedSearchType: string = 'name';

  displayedColumns: string[] = [
    '_id',
    'email',
    'name',
    'company',
    'user_status',
    'count_document',
    'action'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private mentorService: MentorService) {}

  ngOnInit(): void {
    this.mentorService.mentor$.subscribe((mentors) => {
      this.mentorList = mentors;
      this.sortedData = mentors.slice();
      this.dataSource.data = this.sortedData;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterMentors(): void {
    const filteredData = this.mentorList.filter(mentor => {
      const searchValue = this.searchValue.toLowerCase();
      const statusValue = this.statusValue.toLowerCase();
      const civilityValue = this.civilityValue.toLowerCase();
  
      const searchProps = {
        name: mentor.last_name.toLowerCase(),
        email: mentor.email.toLowerCase(),
        company: mentor.company.name.toLowerCase(),
        id: mentor._id.toLowerCase()
      };
  
      const searchProp = searchProps[this.selectedSearchType];
  
      return (
        searchProp.includes(searchValue) &&
        (statusValue === '' || mentor.user_status.toLowerCase() === statusValue) &&
        (civilityValue === '' || mentor.civility.toLowerCase() === civilityValue)
      );
    });
  
    this.dataSource.data = filteredData;
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return this.compareNumber(parseInt(a._id), parseInt(b._id), isAsc);
        case 'email':
        case 'user_status':
          return this.compareString(a[sort.active], b[sort.active], isAsc);
        case 'name':
          return this.compareString(a.last_name, b.last_name, isAsc);
        case 'company':
          return this.compareString(a.company.name, b.company.name, isAsc);
        case 'count_document':
          return this.compareNumber(a[sort.active], b[sort.active], isAsc);
        default:
          return 0;
      }
    });
    this.dataSource.data = this.sortedData;
  }

  compareString(a: string, b: string, isAsc: boolean) {
    return (a.toLowerCase() < b.toLowerCase() ? -1 : 1) * (isAsc ? 1 : -1);
  }

  compareNumber(a: number, b: number, isAsc: boolean) {
    console.log(a + b);
    return (a - b) * (isAsc ? 1 : -1);
  }

  editMentor(mentor: any) {
    // Logika untuk mengedit mentor
  }
  
  deleteMentor(mentor: any) {
    // Logika untuk menghapus mentor
  }
}
