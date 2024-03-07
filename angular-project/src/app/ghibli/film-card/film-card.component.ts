import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmType } from 'src/app/shared/helpers/interface';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {
  @Input() film: FilmType

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetailFilm(id: string) {
    this.router.navigate(['detail', id]);
  }

}
