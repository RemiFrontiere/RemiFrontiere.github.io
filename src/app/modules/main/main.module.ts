import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../../material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainRoutingModule } from './main-routing.module'

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


import { HomeComponentMain } from './home/home.component'
import { CssPartComponent } from './cssPart/cssPart.component'

@NgModule({
  imports: [ 
    HttpClientModule,
    CommonModule, 
    MaterialModule, 
    MainRoutingModule,
    TranslateModule.forRoot({
      loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    }),
  ],
  declarations: [HomeComponentMain, CssPartComponent],
  providers: []
})
export class MainModule {}