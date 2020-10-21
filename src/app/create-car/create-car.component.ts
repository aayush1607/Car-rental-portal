import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AdminService} from '../admin.service';
import {NgForm} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit, OnDestroy  {

  selectedFile: File = null;
  fd = new FormData();
  private unsubscribe = new Subject();
  

  constructor(private http: HttpClient, private adminservice: AdminService) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post(  'http://localhost:3000/api/admin/save-image', this.fd).pipe(takeUntil(this.unsubscribe)).subscribe(res => console.log(res));
 
   }

   ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

   onCreate(form: NgForm) {
    const filename = this.selectedFile.name;
      this.adminservice.createCar(form.value.brand, form.value.model, form.value.power, form.value.seats, filename).pipe(takeUntil(this.unsubscribe)).subscribe(res => console.log(res));
      form.resetForm();
    }

}
