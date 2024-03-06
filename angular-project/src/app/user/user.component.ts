import { Component, OnInit } from '@angular/core';
import { UserType } from '../shared/helpers/interface';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userList: UserType[] = [];
  searchTerm: string = '';

  constructor(
    private userService: UserService,
    // private accentPipe: AccentRemovalPipe,
    // private combinePipe: CombineWordsPipe
  ) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      this.userList = user;
    });
  }

  // get filteredUser(): UserType[] {
  //   return this.userList.filter((user) =>
  //     this.combinePipe
  //       .transform(this.accentPipe.transform(user.name))
  //       .includes(
  //         this.combinePipe.transform(this.accentPipe.transform(this.searchTerm))
  //       )
  //   );
  // }
}
