import { Component, OnInit } from '@angular/core';
import { CharacterType, FilmType } from '../shared/helpers/interface';
import { ActivatedRoute, Router } from '@angular/router';
import { GhibliService } from '../shared/service/ghibli.service';

@Component({
  selector: 'app-selectedghibli',
  templateUrl: './selectedghibli.component.html',
  styleUrls: ['./selectedghibli.component.scss']
})
export class SelectedghibliComponent implements OnInit {
  filmId: string;
  film: FilmType;
  selectedCharacters: CharacterType[];

  constructor(
    private route: ActivatedRoute,
    private ghibliService: GhibliService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.filmId = this.route.snapshot.paramMap.get('id');
    this.getFilmDetail(this.filmId);
    if (!this.film) {
      this.router.navigate(['/home']);
    }
  }

  getFilmDetail(id: string): void {
    this.film = this.ghibliService.getMovieById(id);
    console.log(this.ghibliService.getCharactersByFilm(this.film.title));
    
    this.selectedCharacters = this.ghibliService.getCharactersByFilm(this.film.title);
  }

}
