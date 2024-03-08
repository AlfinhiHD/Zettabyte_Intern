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
      const filteredData = this.mentorList.filter((mentor) => {
        switch (this.selectedSearchType) {
          case 'name':
            return (
              mentor.last_name.toLowerCase().includes(this.searchValue.toLowerCase()) &&
              (this.statusValue === '' || mentor.user_status.toLowerCase() === this.statusValue.toLowerCase()) &&
              (this.civilityValue === '' || mentor.civility.toLowerCase() === this.civilityValue.toLowerCase())
            );
          case 'email':
            return (
              mentor.email.toLowerCase().includes(this.searchValue.toLowerCase()) &&
              (this.statusValue === '' || mentor.user_status.toLowerCase() === this.statusValue.toLowerCase()) &&
              (this.civilityValue === '' || mentor.civility.toLowerCase() === this.civilityValue.toLowerCase())
            );
          default:
            return false; 
        }
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
          return this.compareString(a.first_name, b.first_name, isAsc);
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
}
