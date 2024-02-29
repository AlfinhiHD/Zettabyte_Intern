import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DPOType } from 'src/app/shared/helpers/interface';

@Component({
  selector: 'app-dpo-card',
  templateUrl: './dpo-card.component.html',
  styleUrls: ['./dpo-card.component.scss']
})
export class DpoCardComponent implements OnInit {
  @Input() dpo: DPOType

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetailDPO(id: string) {
    this.router.navigate(['dpo/detail', id]);
  }

}
