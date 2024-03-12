import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CharacterType } from 'src/app/shared/helpers/interface';
import { CharacterService } from 'src/app/shared/service/character.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss'],
})
export class CharacterTableComponent implements OnInit, AfterViewInit {
  characterList: CharacterType[] = [];
  dataSource = new MatTableDataSource<CharacterType>();
  sortedData: CharacterType[] = [];

  searchValue: string = '';
  roleValue: string = '';
  genderValue: string = '';

  selectedSearchType: string = 'realName';

  displayedColumns: string[] = [
    'no',
    'email',
    'name', // real as hero
    'role', // student | class
    'gender',
    'age',
    'popularity',
    'action',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.characterService.character$.subscribe((characters) => {
      this.characterList = characters;
      this.sortedData = characters.slice();
      this.dataSource.data = this.sortedData;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterCharacters(): void {
    const filteredData = this.characterList.filter((character) => {
      const searchValue = this.searchValue.toLowerCase();
      const roleValue = this.roleValue.toLowerCase();
      const genderValue = this.genderValue.toLowerCase();

      const searchProps = {
        realName: character.name.real.toLowerCase(),
        email: character.email.toLowerCase(),
        heroName: character.name.hero.toLowerCase(),
      };

      const searchProp = searchProps[this.selectedSearchType];

      return (
        searchProp.includes(searchValue) &&
        (roleValue === '' ||
          character.role.toLowerCase() === roleValue) &&
        (genderValue === '' ||
          character.gender.toLowerCase() === genderValue)
      );
    });

    this.dataSource.data = filteredData;
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'no':
          return this.compareNumber(
            parseInt(a[sort.active]),
            parseInt(b[sort.active]),
            isAsc
          );
        case 'gender':
        case 'email':
          return this.compareString(a[sort.active], b[sort.active], isAsc);
        case 'name':
          return this.compareString(a.name.real, b.name.real, isAsc);
        case 'role':
          return this.compareString(a.role, b.role, isAsc);
        case 'age':
        case 'popularity':
          return this.compareNumber(a[sort.active], b[sort.active], isAsc);
        default:
          return 0;
      }
    });
    this.dataSource.data = this.sortedData;
  }

  compareString(a: string, b: string, isAsc: boolean) {
    return (a.toLowerCase() < b.toLowerCase() ? -1 : 1) * (isAsc ? 1 : -1);
  }

  compareNumber(a: number, b: number, isAsc: boolean) {
    console.log(a);
    return (a - b) * (isAsc ? 1 : -1);
  }

  goToDetailCharacter(id: string) {
    this.router.navigate(['detail', id]);
  }

  deleteCharacter(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.characterService.deleteCharacter(id);
        Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
        this.router.navigate(['/character']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your data is safe :)', 'error');
      }
    });
  }
}
