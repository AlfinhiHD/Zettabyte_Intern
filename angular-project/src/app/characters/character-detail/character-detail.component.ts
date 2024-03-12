import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterType } from 'src/app/shared/helpers/interface';
import { CharacterService } from 'src/app/shared/service/character.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  characterId: string;
  character: CharacterType;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.characterId = this.route.snapshot.paramMap.get('id');
    this.getCharacterDetail(this.characterId);
    if (!this.character) {
      this.router.navigate(['/character']);
    }
  }

  getCharacterDetail(id: string): void {
    this.character = this.characterService.getCharacterById(id);
  }

  goBack() {
    this.router.navigate(['/character']);
  }

  goToEditForm(id: string) {
    this.router.navigate(['/form'], { queryParams: { id } });
  }

  onDeleteCharacter(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.characterService.deleteCharacter(id);
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
        this.router.navigate(['/home']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your data is safe :)',
          'error'
        )
      }
    })
  }

}
