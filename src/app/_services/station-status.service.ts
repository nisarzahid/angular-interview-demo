import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { StationStatus } from '../_models/_inedex';

@Injectable()
export class StationStatusService {

  apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) {

  }

  getStationBikesInfo():Observable<any>{
    return this.http.get<any>(this.apiUrl+ 'station_status.json');
  }
}

