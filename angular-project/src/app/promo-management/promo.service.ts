import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PromoType } from './model/promo';

@Injectable({
  providedIn: 'root',
})
export class PromoService {
  constructor(private apollo: Apollo) {}

  getAllPromo(
    pagination: { limit: number; page: number },
    filter: { title: string }
  ): Observable<any[]> {
    const GetAllPromos = gql`
      query GetAllPromos($pagination: PaginationInput, $filter: PromoFilter) {
        GetAllPromos(pagination: $pagination, filter: $filter) {
          _id
          ref
          title
          sub_title
          description
          image_url
          count_document
        }
      }
    `;

    return this.apollo
      .watchQuery<any>({
        query: GetAllPromos,
        variables: {
          pagination: pagination,
          filter: filter,
        },
      })
      .valueChanges.pipe(map((result) => result.data.GetAllPromos));
  }

  createPromo(promoInput: PromoType): Observable<any> {
    console.log(promoInput);

    const CREATE_PROMO = gql`
      mutation CreatePromo($promoInput: PromoInput!) {
        CreatePromo(promo_input: $promoInput) {
          _id
          ref
          title
          sub_title
          description
          image_url
          count_document
        }
      }
    `;

    return this.apollo
      .mutate<any>({
        mutation: CREATE_PROMO,
        variables: { promoInput },
      })
      .pipe(
        map((result) => {
          return result.data.CreatePromo;
        })
      );
  }

  deletePromo(promoId: string): Observable<any> {
    const DELETE_PROMO = gql`
      mutation DeletePromo($_id: ID!) {
        DeletePromo(_id: $_id) {
          _id
          ref
          title
          sub_title
          description
          image_url
        }
      }
    `;

    return this.apollo
      .mutate<any>({
        mutation: DELETE_PROMO,
        variables: { _id: promoId },
      })
      .pipe(
        map((result) => {
          return result.data.DeletePromo;
        })
      );
  }

  updatePromo(promoId: string, promoInput: any): Observable<any> {
    console.log("id di service update" + promoId);
    
    const UPDATE_PROMO = gql`
      mutation UpdatePromo($_id: ID!, $promo_input: PromoInput) {
        UpdatePromo(_id: $_id, promo_input: $promo_input) {
          _id
          ref
          title
          sub_title
          description
          image_url
          status
          count_document
        }
      }
    `;

    return this.apollo
      .mutate<any>({
        mutation: UPDATE_PROMO,
        variables: { _id: promoId, promo_input: promoInput },
      })
      .pipe(map((result) => result.data.UpdatePromo));
  }

  getOnePromo(id: string): Observable<any> {
    const GET_ONE_PROMO = gql`
      query GetOnePromo($_id: ID!) {
        GetOnePromo(_id: $_id) {
          _id
          ref
          title
          sub_title
          description
          image_url
          status
          count_document
        }
      }
    `;
    return this.apollo
      .mutate<any>({
        mutation: GET_ONE_PROMO,
        variables: { _id: id },
      })
      .pipe(map((result) => result.data.GetOnePromo));
  }
}
