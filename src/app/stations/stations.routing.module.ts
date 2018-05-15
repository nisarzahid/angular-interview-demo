import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStationsComponent } from './list-stations/list-stations.component';


const routes: Routes = [
  {path: 'stations', children:[
    { path: 'list',  component: ListStationsComponent },
  ] } 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StationsRoutingModule { }