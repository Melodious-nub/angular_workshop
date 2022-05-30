import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.css','../landing/landing.component.css']
})
export class ConfirmAccountComponent implements OnInit {

  emailConfirmed: boolean = false;
  urlParams: any = {};
  link = ''

  constructor(private route: ActivatedRoute,private api: DataService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.urlParams.verificationToken = this.route.snapshot.queryParamMap.get('token');
    this.confirmEmail();
  }

  confirmEmail(){
    this.api.emailVerify(this.urlParams).subscribe(
      res=>{
        console.log('email',res, this.urlParams);
        if(res.success === true){
          this.emailConfirmed = true;
        } else {
          // alert(res.message);
          this.emailConfirmed = false;
        }
      }
    )
  }

}
