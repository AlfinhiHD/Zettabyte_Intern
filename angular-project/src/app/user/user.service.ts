import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  getAllUsers(
    pagination: { limit: number; page: number },
    sorting: {
      last_name: string;
      status: string;
    },
    last_name: string
  ): Observable<any[]> {
    
    console.log(pagination);
    console.log(last_name);
    console.log(sorting);

    const variables: { [key: string]: any } = {
      pagination: pagination,
    };

    if (last_name) {
      variables['last_name'] = last_name;
    }

    if (sorting && (sorting.last_name || sorting.status)) {
      const sortingParameters = {};
      if (sorting.last_name) {
        sortingParameters['last_name'] = sorting.last_name;
      }
      if (sorting.status) {
        sortingParameters['status'] = sorting.status;
      }
      variables['sorting'] = sortingParameters;
    }

    const GetAllUsers = gql`
      query GetAllUsers(
        $pagination: PaginationInput
        $sorting: UserSorting
        $last_name: String
      ) {
        GetAllUsers(
          pagination: $pagination
          sorting: $sorting
          last_name: $last_name
        ) {
          _id
          email
          first_name
          last_name
          civility
          sex
          status
          position
          count_document
        }
      }
    `;

    return this.apollo
      .query<any>({
        query: GetAllUsers,
        variables: variables, // Menggunakan variabel yang sudah dibuat
      })
      .pipe(map((result) => result.data.GetAllUsers));
  }
}