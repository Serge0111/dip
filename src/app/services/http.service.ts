import { Observable, of } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
// import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { DOMAIN } from '../config';
import { environment } from '../../environments/environment';

@Injectable()
export class TripService {

  public constructor(
      private _http: HttpClient,
    //   @Inject(DOMAIN) private _domain: string
      ) { }

  public editPersonalInfo(trip: any): Observable<any> {
    //   return this._http.post(`/test`, trip);
    const headers: any =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    console.log(headers);
    return this._http.get(`${environment.host.api.url}/ticket`,  {
      params: {
        from: trip.start,
        to: trip.end,
      }
    });
    // return this._http.sendTripData(`/text`, trip, 'POST');
    // return of(trip);
  }
}
