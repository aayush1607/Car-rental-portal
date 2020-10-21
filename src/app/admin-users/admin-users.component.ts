import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {AdminService} from '../admin.service';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject();
  displayedColumns = ['email', 'isAdmin', 'edit'];
  dataSource = new MatTableDataSource();
  users: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('table') table: MatTable<any>;

  constructor(private adminservice: AdminService) { }

  ngOnInit():  void {
    this.adminservice.getUsers().pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      const ELEMENT_DATA = [];
      this.users = res;
      this.users.forEach(user => {
        const email = user.email;
        const isAdmin = user.isAdmin;
        ELEMENT_DATA.push({email: email, isAdmin: isAdmin});
      });
      this.dataSource.data = ELEMENT_DATA;
      this.dataSource.paginator = this.paginator;
      console.log(ELEMENT_DATA);
    });
  }


  onDelete(element: any) {
    this.adminservice.deleteUser(element.email).pipe(takeUntil(this.unsubscribe)).subscribe(res => {
        const ELEMENT_DATA = [];
        this.users = res;
        this.users.forEach(user => {
            const email = user.email;
            const isAdmin = user.isAdmin;
            ELEMENT_DATA.push({email: email, isAdmin: isAdmin});
        });
        this.dataSource.data = ELEMENT_DATA;
        this.dataSource.paginator = this.paginator;
    });
    }

    onAdmin(element: any) {
      this.adminservice.makeAdmin(element.email).pipe(takeUntil(this.unsubscribe)).subscribe(res => {
          const ELEMENT_DATA = [];
          this.users = res;
          this.users.forEach(user => {
              const email = user.email;
              const isAdmin = user.isAdmin;
              ELEMENT_DATA.push({email: email, isAdmin: isAdmin});
          });
          this.dataSource.data = ELEMENT_DATA;
          this.dataSource.paginator = this.paginator;
      });
    }

    ngOnDestroy() {
      this.unsubscribe.unsubscribe();
    }


}
