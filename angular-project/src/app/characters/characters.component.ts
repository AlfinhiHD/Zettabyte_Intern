import { Component, OnInit } from '@angular/core';
import { CharacterType } from '../shared/helpers/interface';
import { CharacterService } from '../shared/service/character.service';
import { DialogContentComponent } from '../form/dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characterList: CharacterType[] = [];

  constructor(
    private characterService: CharacterService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.characterService.character$.subscribe((character) => {
      this.characterList = character;
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '100vw',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log('Form data:', result);
    });
  }
}
