import { Component, OnInit } from '@angular/core';
import { CharacterType } from '../shared/helpers/interface';
import { CharacterService } from '../shared/service/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characterList: CharacterType[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.character$.subscribe((character) => {
      this.characterList = character;
    });

  }

}
