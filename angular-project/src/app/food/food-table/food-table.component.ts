import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodType } from '../model/foodType';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.scss']
})
export class FoodTableComponent implements OnInit {

  foodList: FoodType[] = [];
  dataSource = new MatTableDataSource<FoodType>();
  sortedData: FoodType[] = [];

  searchValue: string = '';
  typeValue: string = '';

  selectedSearchType: string = 'name';

  displayedColumns: string[] = [
    'no',
    'name',
    'type',
    'price',
    'stock',
    'popularity',
    'action'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private foodService: FoodService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.foodService.food$.subscribe((foods) => {
      this.foodList = foods;
      this.sortedData = foods.slice();
      this.dataSource.data = this.sortedData;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterFoods(): void {
    const filteredData = this.foodList.filter((food) => {
      const searchValue = this.searchValue.toLowerCase();
      const typeValue = this.typeValue.toLowerCase();

      const searchProps = {
        name: food.name.toLowerCase(),
        price: food.price.toString(),
        stock: food.stock.toString(), 
      };

      const searchProp = searchProps[this.selectedSearchType];

      return (
        searchProp.includes(searchValue) &&
        (typeValue === '' ||
          food.type.toLowerCase() === typeValue)
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
        case 'no':
        case 'name':
        case 'type':
          return this.compareString(a[sort.active], b[sort.active], isAsc);
        case 'price':
        case 'stock' :
        case 'popularity':
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
    console.log(a);
    return (a - b) * (isAsc ? 1 : -1);
  }

  goToDetailfood(id: string) {
    this.router.navigate(['food/detail', id]);
  }
}
