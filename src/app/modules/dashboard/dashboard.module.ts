import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../../material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardRoutingModule } from './dashboard-routing.module'



import { HomeComponentDashboard } from './home/home.component'
import { CssPartComponent } from './cssPart/cssPart.component'

@NgModule({
  imports: [ CommonModule, MaterialModule, DashboardRoutingModule],
  declarations: [HomeComponentDashboard, CssPartComponent],
  providers: []
})
export class DashboardModule {}