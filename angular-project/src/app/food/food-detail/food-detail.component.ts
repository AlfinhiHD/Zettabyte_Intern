import { Component, Input, OnInit } from '@angular/core';
import { FoodType } from '../model/foodType';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {
  foodId: string;
  food: FoodType;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.foodId = this.route.snapshot.paramMap.get('id');
    this.getFoodDetail(this.foodId);
    if (!this.food) {
      this.router.navigate(['/home']);
    }
  }

  getFoodDetail(id: string): void {
    this.food = this.foodService.getFoodById(id);
  }

  goBack(): void {
    this.router.navigate(['/food'])
  }

  onDeleteFood(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.foodService.deleteFood(id);
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
        this.router.navigate(['/home']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your data is safe :)',
          'error'
        )
      }
    })
  }

}
