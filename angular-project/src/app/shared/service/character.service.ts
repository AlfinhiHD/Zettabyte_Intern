import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharacterType } from '../helpers/interface';
import { CharactersData } from '../helpers/data';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private character: BehaviorSubject<CharacterType[]> = new BehaviorSubject<
    CharacterType[]
  >([]);
  character$ = this.character.asObservable();

  constructor() {
    this.character.next([...this.character.getValue(), ...CharactersData]);
  }

  getCharacterById(id: string) {
    return this.character.getValue().find((character) => character.id === id);
  }

  deleteCharacter(id: string) {
    const characterList = this.character.getValue();
    const index = characterList.findIndex((character) => character.id === id);
    if (index !== -1) {
      characterList.splice(index, 1);
      this.character.next(characterList);
    }
  }

  addNewCharacter(newcharacter: CharacterType) {
    console.log(newcharacter);
    
    this.character.next([...this.character.getValue(), newcharacter]);
  }

  updateCharacter(updatedCharacter: CharacterType) {

    const character = this.character.getValue();
    const index = character.findIndex((character) => character.id === updatedCharacter.id);
    if (index !== -1) {
      character[index] = updatedCharacter;
      this.character.next([...character]);
    }
  }
}
