import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DPOType } from '../shared/helpers/interface';
import { DpoService } from '../shared/service/dpo.service';

@Component({
  selector: 'app-selecteddpo',
  templateUrl: './selecteddpo.component.html',
  styleUrls: ['./selecteddpo.component.scss']
})
export class SelecteddpoComponent implements OnInit {
  dpoId: string;
  dpo: DPOType;

  constructor(
    private route: ActivatedRoute,
    private dpoService: DpoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dpoId = this.route.snapshot.paramMap.get('id');
    this.getDPODetail(this.dpoId);
    if (!this.dpo) {
      this.router.navigate(['/home']);
    }
  }

  getDPODetail(id: string): void {
    this.dpo = this.dpoService.getdpoById(id);
  }

}
