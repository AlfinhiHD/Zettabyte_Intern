import { Component, Input, OnInit } from '@angular/core';
import { CharacterType } from 'src/app/shared/helpers/interface';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss']
})
export class ListCharacterComponent implements OnInit {
  @Input() characters: CharacterType[]

  constructor() { }

  ngOnInit(): void {
  }

}
