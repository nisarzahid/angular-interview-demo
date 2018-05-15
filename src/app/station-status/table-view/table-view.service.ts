import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StationService, StationStatusService } from '../../_services/_index';
import { Station, StationStatus } from '../../_models/_inedex';

@Injectable()
export class TableViewService {


  constructor(private stationService:StationService,private stationStatusService:StationStatusService) { }

  loadData(){
   return Observable.forkJoin(
      this.stationService.getStations().map(response => response.data.stations),
      this.stationStatusService.getStationBikesInfo().map(response => response.data.stations)
  )
  }
}
