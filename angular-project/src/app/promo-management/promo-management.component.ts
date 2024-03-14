import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PromoService } from './promo.service';
import { PromoFormComponent } from './promo-form/promo-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-promo-management',
  templateUrl: './promo-management.component.html',
  styleUrls: ['./promo-management.component.scss'],
})
export class PromoManagementComponent implements OnInit, OnDestroy {
  Promos: any = [];
  private promoSubscription: Subscription;

  limit: number = 10;
  page: number = 0;
  title: string = '';

  constructor(private promoService: PromoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.promoSubscription = this.promoService
      .getAllPromo(
        { limit: this.limit, page: this.page },
        { title: this.title }
      )
      .subscribe({
        next: (promo: any) => {
          this.Promos = promo;
          console.log(promo);
        },
        error: (error) => {
          console.error('Error fetching promo:', error);
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

  ngOnDestroy(): void {
    if (this.promoSubscription) {
      this.promoSubscription.unsubscribe();
    }
  }
}
