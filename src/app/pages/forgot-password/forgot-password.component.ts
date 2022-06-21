import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css',]
})
export class ForgotPasswordComponent implements OnInit {

  faLock = faLock;

  constructor(private router: Router,private api: DataService,private toastr: ToastrService) { }

  ngOnInit() {}

  onForgot(forgotForm: NgForm) {
    this.api.forgotPassword(forgotForm.value)
    .subscribe(res=>{
      console.log('res',res);
      if(res.success === true){
        this.toastr.success(res.message, 'Success');
      } else {
        // alert(res.message);
        this.toastr.warning(res.message, 'Warning!');
      }
      forgotForm.reset();
    })
  }


}
