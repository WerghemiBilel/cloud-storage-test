import { Brand } from './../../Models/Modules';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PayloadService {
  constructor(private http: HttpClient) {}

  // getCustomersLarge() {
  //     return this.http.get<any>('assets/customers-large.json')
  //         .toPromise()
  //         .then(res => <Brand[]>res.data)
  //         .then(data => { return data; });
  // }

  getPayloads() {
    return this.http
      .get<any>('assets/payloads.json')
      .toPromise()
      .then((res) => <any[]>res)
      .then((data) => {
        return data;
      });
  }
}
