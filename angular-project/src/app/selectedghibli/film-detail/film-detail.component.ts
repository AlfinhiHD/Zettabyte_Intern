import { Component, Input, OnInit } from '@angular/core';
import { CharacterType, FilmType } from 'src/app/shared/helpers/interface';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  @Input() film: FilmType
  @Input() characters: CharacterType[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.characters);
    
  }

}
