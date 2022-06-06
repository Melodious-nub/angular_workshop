import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css','../landing/landing.component.css']
})
export class ResetPasswordComponent implements OnInit {

  urlParam: any = {};

  constructor(private route: ActivatedRoute,private api: DataService,private toastr: ToastrService, private router: Router,) { }

  ngOnInit(): void {
    this.urlParam.data = this.route.snapshot.queryParamMap.get('token');
    this.resetPass();
  }

  resetPass() {
    this.api.forgotPassword(this.urlParam).subscribe(
      res=>{
        console.log('email',res, this.urlParam);
        if(res.success === true){
          this.toastr.success(res.message, 'Congratulation.');
        } else {
          this.toastr.warning(res.message, 'Oops!');
        }
      }
    )
  }

}
