import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterType, FilmType } from 'src/app/shared/helpers/interface';
import { GhibliService } from 'src/app/shared/service/ghibli.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  @Input() film: FilmType
  @Input() characters: CharacterType[]

  constructor(private ghibliService: GhibliService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.characters);
    
  }

  onDeleteFilm(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ghibliService.deleteMovie(id);
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
