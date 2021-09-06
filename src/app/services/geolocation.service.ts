import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  LOCATION_API_URL = 'https://api.opencagedata.com/geocode/v1/json?';
  LOCATION_API_KEY = '9ecc70a0e12949aa8137326e22b5c14f';
  
  WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?';
  WEATHER_API_KEY = 'd27505e853af5e07e1c238a1605ae728';

  constructor(private http: HttpClient) { }

  getLocation(latitude: number, longitude: number) {

    return this.http.get(`${this.LOCATION_API_URL}q=${latitude}+${longitude}&key=${this.LOCATION_API_KEY}`)
      .pipe(map(data => {
        return data['results'][0].components;
      }));
  }

  getLocationWeather(latitude: number, longitude: number) {
    return this.http.get(`${this.WEATHER_API_URL}lat=${latitude}&lon=${longitude}&units=metric&appid=${this.WEATHER_API_KEY}`);
  }
}
