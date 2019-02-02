import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponentMain } from './home/home.component'
import { CssPartComponent } from './cssPart/cssPart.component'

const routes: Routes = [
  {
    path: 'main',
    component: HomeComponentMain,
    children: [
      {
        path: 'css',
        component: CssPartComponent
      } 
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
