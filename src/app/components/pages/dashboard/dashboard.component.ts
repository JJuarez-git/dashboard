import { Component, OnInit } from '@angular/core';
import { openClose } from '../../../animations/animation';
import { GeolocationService } from '../../../services/geolocation.service';

export interface Location {
  village: string,
  state: string,
  weather: number,
  w_desc: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [openClose]
})
export class DashboardComponent implements OnInit {

  location: Location = {
    village: '',
    state: '',
    weather: 0,
    w_desc: ''
  };

  constructor(private geoApi: GeolocationService) { }

  ngOnInit(): void {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        this.getLocationName(latitude, longitude);
        this.getLocationWeather(latitude, longitude);
      });
    }
  }

  getLocationName(latitude: number, longitude: number) {
    this.geoApi.getLocation(latitude, longitude).subscribe(
      res => {
        console.log(res);
        this.location.village = res.village;
        this.location.state = res.state;
      },
      err => console.error(err)
    );
  }

  getLocationWeather(latitude: number, longitude: number) {
    this.geoApi.getLocationWeather(latitude, longitude).subscribe(
      res => {
        console.log(res);
        this.location.weather = Math.floor(res['main'].temp - 273.15);
        this.location.w_desc = res['weather'][0].description;
      },
      err => console.error(err)
    );
  }
}
