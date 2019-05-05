import { Component, OnInit } from '@angular/core';
import { TripService } from './services/http.service';
import { Store, select } from '@ngrx/store';
import { AddProducts } from './store/actions/actions';
import { IProduct } from './store/interface';
import { selectUserIds, selectUserEntities } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private trip: TripService, private _store: Store<IProduct>) { }

  ngOnInit() {
    this._store.dispatch(new AddProducts({ product: [{ id: '4', name: 'sdfd', price: 4 }, { id: '6', name: 'vasai', price: 6 }] }));
    this._store.select(selectUserIds).subscribe((data: any) => console.log('watch ids', data) );
    this._store.select(selectUserEntities).subscribe((data: any) => console.log('watch datas', data) );
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
