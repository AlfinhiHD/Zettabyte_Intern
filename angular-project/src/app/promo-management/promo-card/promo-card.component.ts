import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PromoService } from '../promo.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { PromoDetailComponent } from '../promo-detail/promo-detail.component';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss'],
})
export class PromoCardComponent implements OnInit {
  @Input() promo: any;
  @Output() promoChanged: EventEmitter<any> = new EventEmitter();

  constructor(private promoService: PromoService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  isValidImageUrl(url: string): boolean {
    const imageExtensions = /\.(jpeg|jpg|gif|png)$/i;
    return url && imageExtensions.test(url);
  }

  onDelete(id: string) {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Anda tidak akan dapat mengembalikan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.promoService.deletePromo(id).subscribe(
          (result) => {
            console.log('Promo berhasil dihapus:', result);
            Swal.fire('Terhapus!', 'Promo telah dihapus.', 'success');
            this.promoChanged.emit();
          },
          (error) => {
            console.error('Gagal menghapus promo:', error);
            Swal.fire('Gagal!', 'Gagal menghapus promo.', 'error');
          }
        );
      }
    });
  }

  openDetailDialog(): void {
    const dialogRef = this.dialog.open(PromoDetailComponent, {
      width: '500px',
      data: this.promo,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Form data card:', result);
      if (result === 'success') {
        this.promoChanged.emit();
      }
    });
  }
}
