import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';
import { PromoService } from './promo.service';
import { PromoFormComponent } from './promo-form/promo-form.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-promo-management',
  templateUrl: './promo-management.component.html',
  styleUrls: ['./promo-management.component.scss'],
})
export class PromoManagementComponent implements OnInit, OnDestroy {
  Promos: any = [];

  private promoSubscription: Subscription;
  searchInputControl = new FormControl('');

  isLoading: boolean = false;
  limit: number = 10;
  page: number = 0;
  title: string = '';

  constructor(private promoService: PromoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.searchInputControl.valueChanges
      .pipe(debounceTime(1500))
      .subscribe((value) => {
        this.searchByTitle(value);
        this.isLoading = true;
      });
  
      this.isLoading = true;
    this.promoSubscription = this.promoService
      .getAllPromo(
        { limit: this.limit, page: this.page },
        { title: this.title }
      )
      .subscribe({
        next: (promo: any) => {
          console.log(promo);
          this.Promos = promo;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error fetching promo:', error);
          this.isLoading = false;
        },
      });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(PromoFormComponent, {
      width: '100vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log('Form data:', result);
    });
  }

  clearSearchInput(): void {
    this.searchInputControl.setValue('');
  }

  searchByTitle(searchTerm: string): void {
    this.promoSubscription = this.promoService
      .getAllPromo(
        { limit: this.limit, page: this.page },
        { title: searchTerm }
      )
      .subscribe({
        next: (promo: any) => {
          this.Promos = promo;
        },
        error: (error) => {
          console.error('Error fetching promo:', error);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.promoSubscription) {
      this.promoSubscription.unsubscribe();
    }
  }
}
