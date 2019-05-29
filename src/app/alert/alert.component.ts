import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
