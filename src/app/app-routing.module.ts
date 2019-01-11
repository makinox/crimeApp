import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../app/dashboard/dashboard.component'
import {ListComponent} from '../app/list/list.component'
import {DetailsComponent} from '../app/details/details.component'


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'list', component: ListComponent},
  {path: 'detail', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
