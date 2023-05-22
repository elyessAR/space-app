import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureOfTheDayComponent } from './components/picture-of-the-day/picture-of-the-day.component';

const routes: Routes = [
  { path: 'picture-of-the-day', component: PictureOfTheDayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
