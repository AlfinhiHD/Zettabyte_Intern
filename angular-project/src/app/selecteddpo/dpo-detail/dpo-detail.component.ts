import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DPOType } from 'src/app/shared/helpers/interface';
import { DpoService } from 'src/app/shared/service/dpo.service';

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
    this.dpoService.deletedpo(id);
    this.router.navigate(['/home']);
  }

}
