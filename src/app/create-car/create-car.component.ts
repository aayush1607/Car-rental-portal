import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  selectedFile: File = null;
  fd = new FormData();
  private unsubscribe = new Subject();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post(  'http://localhost:3000/api/admin/save-image', this.fd).subscribe(res => console.log(res));
 
   }

}
