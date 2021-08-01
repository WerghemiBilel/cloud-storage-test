import { Brand } from './../../Models/Modules';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  constructor(private http: HttpClient) {}

  getBrands() {
    return this.http
      .get<any>('assets/brands.json')
      .toPromise()
      .then((res) => <Brand[]>res)
      .then((data) => {
        return data;
      });
  }

  // public getBrands(): Observable<any> {
  //   return this.http.get('../../../assets/brands.json');
  // }
}
