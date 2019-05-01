import { Component } from '@angular/core';
import { TripService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private trip: TripService) {

  }
  getTrip() {
    console.log(this.trip.state);
  }
}

class Boria {
  public name: string;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const a = new Boria('HI');
const b = new Boria('HIfgdf');
a.getName();
