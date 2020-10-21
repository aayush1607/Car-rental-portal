import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { MainPageComponent, DialogOverviewExampleDialog } from './main-page/main-page.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ManageResrevationsComponent } from './manage-resrevations/manage-resrevations.component';
import { MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './admin.service';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CreateCarComponent,
    MainPageComponent,
    DatepickerComponent,
    AdminUsersComponent,
    ManageResrevationsComponent,
    DialogOverviewExampleDialog
  ], entryComponents: [DialogOverviewExampleDialog],
  imports: [
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot(
      [
        {path:'',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        {path:'main',component:MainPageComponent},
        {path:'create-car',component:CreateCarComponent},
        {path:'users',component:AdminUsersComponent},
        {path: 'manage', component: ManageResrevationsComponent},


      ]
    )


  ],
  providers: [UserService,LoginComponent, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
