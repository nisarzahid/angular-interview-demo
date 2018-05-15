import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableViewComponent } from './table-view/table-view.component';

const routes: Routes = [
  {path: 'station-status', children:[
    { path: 'tableview',  component: TableViewComponent },
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
export class StationStatusRoutingModule { }