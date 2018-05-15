import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { StationStatusRoutingModule } from './station-status/station-status.routing.module';

const appRoutes: Routes = [
    { path: '',   redirectTo: '/station-status/tableview', pathMatch: 'full' },
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}