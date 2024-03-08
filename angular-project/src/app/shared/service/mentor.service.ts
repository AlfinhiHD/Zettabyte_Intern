import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MentorType } from '../helpers/interface';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MentorService {
  private mentor: BehaviorSubject<MentorType[]> = new BehaviorSubject<
    MentorType[]
  >([]);
  mentor$ = this.mentor.asObservable();

  constructor(private http: HttpClient) {
    this.getMentors();
  }

  getMentors(): void {
    this.http.get<MentorType[]>('../../../assets/mentor.json').subscribe({
      next: (mentors: MentorType[]) => {
        console.log(mentors);
        this.mentor.next(mentors);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  // getMentorById(id: string) {
  //   return this.mentor.getValue().find((mentor) => mentor._id === id);
  // }

  // deletementor(id: string) {
  //   const mentorList = this.mentor.getValue();
  //   const index = mentorList.findIndex((mentor) => mentor._id === id);
  //   if (index !== -1) {
  //     mentorList.splice(index, 1);
  //     this.mentor.next(mentorList);
  //   }
  // }

  // addNewmentor(newmentor: MentorType) {
  //   this.mentor.next([...this.mentor.getValue(), newmentor]);
  // }

  // updatementor(updatedMentor: MentorType) {

  //   const mentor = this.mentor.getValue();
  //   const index = mentor.findIndex((mentor) => mentor._id === updatedMentor._id);
  //   if (index !== -1) {
  //     mentor[index] = updatedMentor;
  //     this.mentor.next([...mentor]);
  //   }
  // }
}
