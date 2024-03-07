import { Component, OnInit } from '@angular/core';
import { CharacterType, FilmType } from '../shared/helpers/interface';
import { GhibliService } from '../shared/service/ghibli.service';

@Component({
  selector: 'app-ghibli',
  templateUrl: './ghibli.component.html',
  styleUrls: ['./ghibli.component.scss']
})
export class GhibliComponent implements OnInit {
  filmList: FilmType[] = [];
  characterList: CharacterType[] = [];

  constructor(private ghibliService: GhibliService,) { }

  ngOnInit(): void {
    this.ghibliService.movies$.subscribe((movie) => {
      this.filmList = movie;
    });

    this.ghibliService.characters$.subscribe((characters) => {
      this.characterList = characters;
    });

  }

}
