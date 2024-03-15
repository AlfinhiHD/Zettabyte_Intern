import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from './user.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

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
  ];

  searchInputControl = new FormControl('');
  isLoading: boolean = false;
  dataSource = new MatTableDataSource<any>();
  searchInput: string = '';
  limit: number = 5;
  page: number = 0;
  totalItems: number = 0;
  maxPage: number = 0;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.searchInputControl.valueChanges
      .pipe(debounceTime(1500))
      .subscribe((value) => {
        this.getAllUsers(value);
      });

    this.getAllUsers();
  }

  clearSearchInput(): void {
    this.searchInputControl.setValue('');
  }

  getAllUsers(value?: string): void {
    this.isLoading = true;
    this.userService
      .getAllUsers({ limit: this.limit, page: this.page }, value)
      .subscribe({
        next: (users: any[]) => {
          console.log(users);
          this.dataSource.data = users.map((user, index) => ({
            ...user,
            no: index + 1,
          }));
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.totalItems = users[0].count_document;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error fetching users:', error);
          this.isLoading = false;
        },
      });
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.getAllUsers();
  }
}
