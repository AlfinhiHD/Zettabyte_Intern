import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from './user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = [
    'no',
    'email',
    'name',
    'sex',
    'status',
    'position',
    'count_document',
  ];
  dataSource = new MatTableDataSource<any>();
  searchInput: string = '';
  limit: number = 5;
  page: number = 0;
  maxPage: number = 0;
  isLoadingResults: boolean = false;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.isLoadingResults = true;
    this.userService
      .getAllUsers({ limit: this.limit, page: this.page }, this.searchInput)
      .subscribe({
        next: (users: any[]) => {
          console.log(users);
          this.dataSource.data = users.map((user, index) => ({
            ...user,
            no: index + 1,
          }));
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoadingResults = false;
        },
        error: (error) => {
          console.error('Error fetching users:', error);
          this.isLoadingResults = false;
        },
      });
  }

  searchByLastName(): void {
    if (this.searchInput.length >= 3) {
      console.log('apa');
      this.getAllUsers();
    } else if (this.searchInput.length == 0) {
      console.log('apa 0');
    }
  }

  nextPage(): void {
    this.page++;
    this.getAllUsers();
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.getAllUsers();
    }
  }

  validateLimit(): void {
    if (this.limit < 1) {
      this.limit = 1;
    }
    this.getAllUsers();
  }
}
