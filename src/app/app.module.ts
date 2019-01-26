import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardModule }     from './modules/dashboard/dashboard.module';
import { MaterialModule } from './material.module'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
