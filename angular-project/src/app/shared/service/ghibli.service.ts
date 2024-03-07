import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharacterType, FilmType } from '../helpers/interface';
import { ghibliCharacters, ghibliFilms } from '../helpers/data';

@Injectable({
  providedIn: 'root',
})
export class GhibliService {
  private movies: BehaviorSubject<FilmType[]> = new BehaviorSubject<FilmType[]>(
    []
  );
  movies$ = this.movies.asObservable();

  private characters: BehaviorSubject<CharacterType[]> = new BehaviorSubject<
    CharacterType[]
  >([]);

  characters$ = this.characters.asObservable();

  constructor() {
    this.movies.next([...this.movies.getValue(), ...ghibliFilms]);
    this.characters.next([...this.characters.getValue(), ...ghibliCharacters]);
  }

  getMovieById(id: string) {
    return this.movies.getValue().find((movies) => movies.id === id);
  }

  getCharactersByFilm(filmTitle: string): CharacterType[] {
    return this.characters.getValue().filter(character => character.film === filmTitle);
  }

}
