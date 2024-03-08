import { Component, OnInit } from '@angular/core';
import { MentorService } from '../shared/service/mentor.service';
import { MentorType } from '../shared/helpers/interface';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {
mentorList: MentorType[] = [];

  constructor(private mentorService: MentorService) { }

  ngOnInit(): void {
    this.mentorService.mentor$.subscribe((mentor) => {
      this.mentorList = mentor;
    })
  }
}
