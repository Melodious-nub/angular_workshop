import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private api: DataService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onChangepass(changePassform: NgForm){
    this.api.changePassword(changePassform.value).subscribe(res=>{
      console.log('res',res);
      if(res.success === true){
        this.toastr.success(res.message, 'Password Changed');
      } else {
        // alert(res.message);
        this.toastr.warning(res.message, 'Warning!');
      }
    })
  }

}
