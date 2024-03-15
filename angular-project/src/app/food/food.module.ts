import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { SharedModule } from '../shared/shared.module';
import { FoodTableComponent } from './food-table/food-table.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    FoodComponent,
    FoodCardComponent,
    FoodDetailComponent,
    FoodFormComponent,
    FoodTableComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    FoodComponent,
    FoodCardComponent,
    FoodDetailComponent,
    FoodFormComponent,
    FoodTableComponent
  ]
})
export class FoodModule { }
