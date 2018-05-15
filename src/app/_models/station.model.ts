export class Station {
  station_id: string;
  name: string;
  short_name: string;
  lat: number;
  lon: number;
  region_id: number;
  rental_methods: string[];
  capacity: number;
  rental_url: string;
  eightd_has_key_dispenser: boolean;
}
