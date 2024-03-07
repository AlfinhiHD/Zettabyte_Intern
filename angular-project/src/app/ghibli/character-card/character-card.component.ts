import { Component, Input, OnInit } from '@angular/core';
import { CharacterType } from 'src/app/shared/helpers/interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: CharacterType

  constructor() { }

  ngOnInit(): void {
  }

}
