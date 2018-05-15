import { Component, OnInit } from '@angular/core';
import { StationService } from '../../_services/_index';
import { Station } from '../../_models/_inedex';

@Component({
  selector: 'app-list-stations',
  templateUrl: './list-stations.component.html',
  styleUrls: ['./list-stations.component.css']
})
export class ListStationsComponent implements OnInit {
  stations: Station[];

  constructor(private stationService:StationService) { }

  ngOnInit() {
    this.stationService.getStations()
    .map(response => response.data.stations)
    .subscribe(
      results => {
        this.stations = results;
      },
      err => console.error(err)
    );
  }

}
