import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStationsComponent } from './list-stations/list-stations.component';
import { StationsRoutingModule } from './stations.routing.module';
import { StationService } from '../_services/_index';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    StationsRoutingModule,
    NgxDatatableModule
  ],
  declarations: [ListStationsComponent],
  providers:[StationService]
})
export class StationsModule { }
