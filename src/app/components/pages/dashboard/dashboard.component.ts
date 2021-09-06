import { Component, OnInit } from '@angular/core';
import { openClose } from '../../../animations/animation';
import { GeolocationService } from '../../../services/geolocation.service';

export interface Location {
  village?: string,
  state?: string,
  weather?: string,
  w_desc?: string,
  disp?: boolean,
  icon?: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [openClose]
})
export class DashboardComponent implements OnInit {

  location: Location = {};

  constructor(private geoApi: GeolocationService) { }

  ngOnInit(): void {

      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
  
          this.getLocationName(latitude, longitude);
          this.getLocationWeather(latitude, longitude);
          this.location.disp = true;
        }, () => this.location.disp = false); 
      } 
    
  }

  getLocationName(latitude: number, longitude: number) {
    this.geoApi.getLocation(latitude, longitude).subscribe(
      res => {
        console.log(res);
        this.location.village = res.village || res.city;
        this.location.state = res.state;
      },
      err => console.error(err)
    );
  }

  getLocationWeather(latitude: number, longitude: number) {
    this.geoApi.getLocationWeather(latitude, longitude).subscribe(
      res => {
        console.log(res);
        let weather = Math.floor(res['main'].temp);
        this.location.weather = weather.toString();
        this.location.w_desc = res['weather'][0].description;
        this.location.icon = res['weather'][0].icon;
      },
      err => console.error(err)
    );
  }
}
