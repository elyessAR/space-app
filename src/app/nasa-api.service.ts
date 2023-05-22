import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class NasaApiService {
  private apiKey = environment.nasaApiKey;

  constructor(private http: HttpClient) {}

  getPictureOfTheDay(): Observable<any> {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

    return this.http.get(url);
  }
}
