import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

import { environment } from "../../environments/environment";
import { Station } from "../_models/_inedex";

@Injectable()
export class StationService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getStations(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "station_information.json");
  }
}
