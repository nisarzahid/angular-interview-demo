import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import { StationStatusService, StationService } from '../../_services/_index';
import { StationStatus, Station } from '../../_models/_inedex';
import { TableViewService } from './table-view.service';


@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})

export class TableViewComponent implements OnInit {
  stations: Station[];
  stationsStatus: any[];
  stationInfo:any[];
  columns = [
    { prop: 'name' },
    { name: 'capacity' },
    {prop:'percentAvailable'}
    // { name: 'Company' }
  ];

  constructor(private tableViewService:TableViewService) { }

  ngOnInit() {
  
    this.tableViewService.loadData().subscribe(
      data => {
        this.stations = data[0]
        this.stationsStatus = data[1]
        
        let combineData = [];
        
        this.stations.forEach(element => {
         // let newObj={};
          let index = this.stationsStatus.findIndex(item => item.station_id == element.station_id );  
          
          this.stationsStatus[index].name = element.name;
          this.stationsStatus[index].capacity = element.capacity;
          this.stationsStatus[index].percentAvailable = Math.floor (((this.stationsStatus[index].num_bikes_available)/element.capacity)*100); 
        });
        
        this.stationInfo = [...combineData];
        
        console.log(this.stationInfo.length);
      },
      err => console.error(err)
    );
   
  }

}
