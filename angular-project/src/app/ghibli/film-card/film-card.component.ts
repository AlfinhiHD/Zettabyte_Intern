import { Component, Input, OnInit } from '@angular/core';
import { FilmType } from 'src/app/shared/helpers/interface';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {
  @Input() film: FilmType

  constructor() { }

  ngOnInit(): void {
  }

  // goToDetailEmployee(id: string) {
  //   this.router.navigate(['employee/detail', id]);
  // }

}
