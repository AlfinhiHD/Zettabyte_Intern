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
  limit: number = 5;
  page: number = 0;
  title: string = '';

  constructor(private promoService: PromoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.searchInputControl.valueChanges
      .pipe(debounceTime(1500))
      .subscribe((value) => {
        this.title = value;
        this.getAllPromo();
      });
    this.getAllPromo();
  }

  getAllPromo() {
    this.isLoading = true;
    this.promoSubscription = this.promoService
      .getAllPromo(
        { limit: this.limit, page: this.page },
        { title: this.title }
      )
      .subscribe({
        next: (promo: any[]) => {
          if (promo.length === 0) {
            this.Promos = promo
            this.isLoading = false;
          } else {
            this.Promos = promo;
            this.isLoading = false;
          }
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
      console.log('dialog result:', result);
      if (result === 'success') {
        this.getAllPromo();
      }
    });
  }

  clearSearchInput(): void {
    this.searchInputControl.setValue('');
  }

  nextPage(): void {
    this.page++;
    this.getAllPromo();
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.getAllPromo();
    }
  }

  updateLimit(): void {
    this.getAllPromo();
  }

  ngOnDestroy(): void {
    if (this.promoSubscription) {
      this.promoSubscription.unsubscribe();
    }
  }
}
