import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserType } from '../helpers/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: BehaviorSubject<UserType[]> = new BehaviorSubject<UserType[]>([]);
  user$ = this.user.asObservable();

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.http.get<UserType[]>(`${this.apiUrl}/users`).subscribe(
      response => {
        console.log(response);
        this.user.next(response);
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

  // POST /users
  createPost(postData: UserType): Observable<any> {
    return this.http.post<UserType>(`${this.apiUrl}/users`, postData).pipe(
      map(response => {
        console.log(response);
        const currentPosts = this.user.getValue();
        this.user.next([...currentPosts, response]);
        return response;
      }),
      catchError(error => {
        console.error('Error creating post:', error);
        throw error;
      })
    );
  }

  // PUT /users/1
  updatePost(id: number, updateData: UserType): Observable<any> {
    return this.http.put<UserType>(`${this.apiUrl}/users/${id}`, updateData).pipe(
      map(response => {
        console.log(response);
        const currentPosts = this.user.getValue();
        const updatedPosts = currentPosts.map(post => {
          if (post.id === id) {
            return response;
          }
          return post;
        });
        this.user.next(updatedPosts);
        return response;
      }),
      catchError(error => {
        console.error('Error updating post:', error);
        throw error;
      })
    );
  }

  // DELETE /users/1
  deletePost(id: number): Observable<any> {
    return this.http.delete<number>(`${this.apiUrl}/users/${id}`).pipe(
      map(() => {
        const currentPosts = this.user.getValue();
        const updatedPosts = currentPosts.filter(post => post.id !== id);
        this.user.next(updatedPosts);
      }),
      catchError(error => {
        console.error('Error deleting post:', error);
        throw error;
      })
    );
  }
}