import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterType } from 'src/app/shared/helpers/interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: CharacterType

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetailCharacter(id: string) {
    this.router.navigate(['detail', id]);
  }


}
