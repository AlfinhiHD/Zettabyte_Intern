import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PromoType } from '../model/promo';
import { PromoFormComponent } from '../promo-form/promo-form.component';

@Component({
  selector: 'app-promo-detail',
  templateUrl: './promo-detail.component.html',
  styleUrls: ['./promo-detail.component.scss'],
})
export class PromoDetailComponent implements OnInit {
  promo: PromoType;
  result: string = "";

  constructor(
    public dialogRef: MatDialogRef<PromoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log("id di detail" + this.data._id)
    this.promo = this.data
  }

  isValidImageUrl(url: string): boolean {
    const imageExtensions = /\.(jpeg|jpg|gif|png)$/i;
    return url && imageExtensions.test(url);
  }

  openEditDialog(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(PromoFormComponent, {
      width: '100vw',
      disableClose: true,
      data: { _id: this.data._id }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Form data:', result);
    });
  }


  closeDialog(): void {
    this.dialogRef.close(this.result);
  }
}
