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
      user_status: string;
    },
    last_name: string,
    user_status: string
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

    if (user_status) {
      variables['user_status'] = user_status;
    }

    if (sorting && (sorting.last_name || sorting.user_status)) {
      const sortingParameters = {};
      if (sorting.last_name) {
        sortingParameters['last_name'] = sorting.last_name;
      }
      if (sorting.user_status) {
        sortingParameters['user_status'] = sorting.user_status;
      }
      variables['sorting'] = sortingParameters;
    }

    const GetAllUsers = gql`
      query GetAllUsers(
        $pagination: PaginationInput
        $sorting: UserSorting
        $last_name: String
        $user_status: EnumUserStatus
      ) {
        GetAllUsers(
          pagination: $pagination
          sorting: $sorting
          last_name: $last_name
          user_status: $user_status
        ) {
          _id
          email
          first_name
          last_name
          civility
          sex
          status
          position
          user_status
          count_document
        }
      }
    `;

    return this.apollo
      .query<any>({
        query: GetAllUsers,
        variables: variables,
      })
      .pipe(map((result) => result.data.GetAllUsers));
  }
}