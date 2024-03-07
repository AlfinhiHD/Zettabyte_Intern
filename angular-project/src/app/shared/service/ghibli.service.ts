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
    return this.characters
      .getValue()
      .filter((character) => character.film === filmTitle);
  }

  deleteMovie(id: string) {
    const movieList = this.movies.getValue();
    const index = movieList.findIndex((movie) => movie.id === id);
    if (index !== -1) {
      movieList.splice(index, 1);
      this.movies.next(movieList);
    }
  }

  addNewMovie(newMovie: FilmType) {
    this.movies.next([...this.movies.getValue(), newMovie]);
  }

  updateMovie(updatedMovie: FilmType) {
    console.log(updatedMovie);
    
    const movies = this.movies.getValue();
    const index = movies.findIndex((movie) => movie.id === updatedMovie.id);
    if (index !== -1) {
      movies[index] = updatedMovie;
      this.movies.next([...movies]);
    }
  }


}
