import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  admin: any;
  auth: any;
  temp = '1';

  constructor(private userservice: UserService) {
    const data = this.userservice.getuserData();
    if (data) {
      if (data.admin === this.temp) {
        this.admin = 1;
      } else {
        this.admin = 0;
      }
    }

   }

  ngOnInit(): void {

    this.userservice.isAdmin.subscribe(result => {
      this.admin = result;
    });

    this.userservice.authenticated.subscribe(res => {
      this.auth = res;
    });
  }


  onLogout() {
    this.userservice.authenticated.next(false);
    localStorage.clear();
    this.userservice.changeAdmin(2);
  }
}
