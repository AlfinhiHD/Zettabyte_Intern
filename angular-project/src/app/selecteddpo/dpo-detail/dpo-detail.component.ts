import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DPOType } from 'src/app/shared/helpers/interface';
import { DpoService } from 'src/app/shared/service/dpo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dpo-detail',
  templateUrl: './dpo-detail.component.html',
  styleUrls: ['./dpo-detail.component.scss']
})
export class DpoDetailComponent implements OnInit {
  @Input() dpo: DPOType

  constructor(private dpoService: DpoService, private router: Router) { }

  ngOnInit(): void {
  }

  onDeleteDPO(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dpoService.deletedpo(id);
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
