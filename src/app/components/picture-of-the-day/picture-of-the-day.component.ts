import { Component } from '@angular/core';
import { NasaApiService } from '../../nasa-api.service';

@Component({
  selector: 'app-picture-of-the-day',
  templateUrl: './picture-of-the-day.component.html',
  styleUrls: ['./picture-of-the-day.component.scss'],
  providers: [NasaApiService],
})
export class PictureOfTheDayComponent {
  public picOfTheDay: any;
  ngOnInit(): void {
    this.getPictureOfTheDay();
  }

  constructor(private nasaApiService: NasaApiService) {}

  getPictureOfTheDay(): void {
    this.nasaApiService.getPictureOfTheDay().subscribe((data) => {
      this.picOfTheDay = data;
    });
  }
}
