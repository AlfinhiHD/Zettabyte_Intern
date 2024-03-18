import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { FoodType } from '../food/model/foodType';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = [
    'email',
    'name',
    'sex',
    'user_status',
    'position',
  ];

  searchInputControl = new FormControl('');

  isLoading: boolean = false;
  dataSource = new MatTableDataSource<FoodType>();

  //Filter
  searchInput: string = '';
  userStatusValue: string = '';

  //Pagination
  limit: number = 5;
  page: number = 0;
  totalItems: number = 0;
  maxPage: number = 0;

  //Sorting
  sorting = {
    lastNameSort: '',
    userStatusSort: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.searchInputControl.valueChanges
      .pipe(debounceTime(1500))
      .subscribe((value) => {
        this.searchInput = value;
        this.getAllUsers();
      });

    this.getAllUsers();
  }

  clearSearchInput(): void {
    this.searchInputControl.setValue('');
  }

  getAllUsers(): void {
    this.isLoading = true;
    this.userService
      .getAllUsers(
        { limit: this.limit, page: this.page },
        {
          last_name: this.sorting.lastNameSort,
          user_status: this.sorting.userStatusSort,
        },
        this.searchInput,
        this.userStatusValue
      )
      .subscribe({
        next: (users: any[]) => {
          if (users.length === 0) {
            this.isLoading = false;
            this.dataSource.data = [];
          } else {
            this.dataSource.data = users;
            this.totalItems = users[0].count_document;
            this.isLoading = false;
          }
        },
        error: (error) => {
          console.error('Error fetching users:', error);
          this.isLoading = false;
        },
      });
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex;
    this.limit = event.pageSize;
    this.getAllUsers();
  }

  onSortChange(event: any): void {
    console.log(event);

    switch (event.active) {
      case 'name':
        this.sorting.lastNameSort = event.direction;
        break;
      case 'user_status':
        this.sorting.userStatusSort = event.direction;
        break;
      default:
        break;
    }
    this.getAllUsers();
  }

  filterUserStatus(): void {
    console.log(this.userStatusValue);
    this.getAllUsers();
  }

  getSexLabel(sex: string): string {
    switch (sex) {
      case 'F':
        return 'Female';
      case 'M':
        return 'Male';
      case 'N':
        return 'Neutral';
      default:
        return '';
    }
  }
}
