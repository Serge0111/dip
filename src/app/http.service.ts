import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOMAIN } from './config';

@Injectable()
export class HttpService extends HttpClient {

  public constructor(
    _httpHandler: HttpHandler,
    @Inject(DOMAIN) private _domain: string
  ) {
    super(_httpHandler);
  }

  // tslint:disable-next-line: no-any
  public sendTripData(url: string, body: any, method: string = 'POST'): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders();
    return this._requestMethod(url, body, method, headers);
  }

  // tslint:disable-next-line: no-any
  public requestWithParams<T>(url: string, body: any, method: string = 'POST', params?: any): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders(
      {
        'Content-type': `application/json`,
      }
    );
    const httpParams: HttpParams = new HttpParams({ fromObject: params });
    return this._requestMethod<T>(url, body, method, headers, httpParams);
  }

  // tslint:disable-next-line
  private _requestMethod<T>(url: string, body: any, method: string = 'POST', headers?: any, params?: any): Observable<HttpEvent<T>> {
    return this.request(new HttpRequest(
      method,
      `${this._domain}${url}`,
      body,
      { headers, params }
    ));
  }
}
