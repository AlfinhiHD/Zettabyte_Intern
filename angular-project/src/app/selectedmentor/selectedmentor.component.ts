import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectedmentor',
  templateUrl: './selectedmentor.component.html',
  styleUrls: ['./selectedmentor.component.scss'],
})
export class SelectedmentorComponent implements OnInit {
  mentor: any;

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.mentor = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      civility: 'MR',
      user_status: 'active',
      company: {
        name: 'Google',
      },
      count_document: 10,
    };
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
