import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//3rdParty
import {MatDialogModule} from '@angular/material/dialog';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//Local Project
import { TableViewComponent } from './table-view/table-view.component';
import { StationStatusRoutingModule } from './station-status.routing.module';
import { StationService, StationStatusService } from '../_services/_index';
import { TableViewService } from './table-view/table-view.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StationStatusRoutingModule,
    NgxDatatableModule,
    MatDialogModule
  ],
  declarations: [TableViewComponent],
  providers:[StationService, StationStatusService, TableViewService]
})
export class StationStatusModule { }
