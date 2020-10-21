import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AdminService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createCar(brand: string, model: string, power: string, seats: any, imgUrl: string) {
    const carData = {brand: brand, model: model, power: power, seats: seats, imgUrl: imgUrl};
    return this.http.post( this.url + '/api/admin/create-car', carData);
  }

  getUsers() {
    return this.http.get(this.url + '/api/admin/users');
  }


  deleteUser(email: string) {
    const data = {email: email};
    return this.http.post(this.url + '/api/admin/delete-user', data);
  }


  makeAdmin(email: string) {
    const userData = {email: email};
    return this.http.post(this.url + '/api/admin/admin-user', userData);
  }

  rentedCars() {
    return this.http.get(this.url + '/api/admin/rented-cars');
  }

  cancelRent(id: any, from: any, until: any) {
    const data = {id: id, from: from, until: until};
    return this.http.post(this.url + '/api/admin/cancel-rent', data);
  }
}
