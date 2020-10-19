import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';



@Injectable()
export class UserService {

  url = 'http://localhost:3000';
  path = 'http://localhost:3000/uploads/';

  tokenTimer: any;

  isAdmin = new Subject();
  authenticated = new BehaviorSubject(false);
  selectedCars = new Subject();

  constructor(private http: HttpClient, private router: Router) {
  }
  changeAdmin(data: any) {
        this.isAdmin.next(data);
    }

  createUser(email:string,password:string){

    const authData={email: email,password:password};
    return this.http.post('http://localhost:3000/api/user/signup',authData);

  }
  loginUser(email: string, password: string) {
    const authData = {email: email, password: password};
    return this.http.post<{token: string, expiresIn: any, admin: any}>( 'http://localhost:3000/api/user/login', authData);

}


setTimer(duration: any) {
 this.tokenTimer = setTimeout(() => {this.onLogout() }, duration * 1000);
}
saveuserData(token: string, expiration: Date, admin: any) {
  localStorage.setItem('token', token);
  localStorage.setItem('expiration', expiration.toString());
  localStorage.setItem('admin', admin);
}

onLogout() {
  this.authenticated.next(false);
  clearTimeout(this.tokenTimer);
  this.changeAdmin(0);
  localStorage.removeAll();
  this.router.navigate(['']);
}

getuserData() {
 const token = localStorage.getItem('token');
 const expiration =  localStorage.getItem('expiration');
 const admin = localStorage.getItem('admin');
 if (!token || !expiration) {
     return;
 }
 return {
     token: token,
     expirationDate: new Date(expiration),
     admin: admin
 };
}


getCars(from: any, until: any) {
  const data = {from: from, until: until};
  return this.http.post(this.url + '/api/admin/cars', data);
}

rentCar(id: any, from: any, until: any, fromDate: any, untilDate: any) {
  const rentInfo = {id: id, from: from, until: until, fromDate: fromDate, untilDate: untilDate};
  return this.http.post(this.url + '/api/admin/rent', rentInfo);
}



}
