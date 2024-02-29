import { Component, OnInit } from '@angular/core';
import { DpoService } from '../shared/service/dpo.service';
import { DPOType } from '../shared/helpers/interface';

@Component({
  selector: 'app-dpo',
  templateUrl: './dpo.component.html',
  styleUrls: ['./dpo.component.scss'],
})
export class DpoComponent implements OnInit {
  dpoList: DPOType[] = [];

  constructor(private dpoService: DpoService) {}

  ngOnInit(): void {
    this.dpoService.dpo$.subscribe((dpo) => {
      this.dpoList = dpo;
    });
  }
}
