import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../../material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainRoutingModule } from './main-routing.module'



import { HomeComponentMain } from './home/home.component'
import { CssPartComponent } from './cssPart/cssPart.component'

@NgModule({
  imports: [ CommonModule, MaterialModule, MainRoutingModule],
  declarations: [HomeComponentMain, CssPartComponent],
  providers: []
})
export class MainModule {}