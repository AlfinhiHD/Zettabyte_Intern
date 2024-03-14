import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PromoService } from './promo.service';

@Component({
  selector: 'app-promo-management',
  templateUrl: './promo-management.component.html',
  styleUrls: ['./promo-management.component.scss']
})
export class PromoManagementComponent implements OnInit, OnDestroy {

  Promos: any = [];
  private promoSubscription: Subscription

  constructor(private promoService: PromoService ) {}

  ngOnInit(): void {
    this.promoSubscription = this.promoService.getAllPromo().subscribe({
      next: (promo: any) => {
        this.Promos = promo; 
        console.log(promo);
      },
      error: (error) => {
        console.error('Error fetching promo:', error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.promoSubscription) {
      this.promoSubscription.unsubscribe();
    }
  }
}
