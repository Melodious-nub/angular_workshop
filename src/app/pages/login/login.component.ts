import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../landing/landing.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  // Passed AuthServices
  constructor(private auth: AuthService, private router: Router,private api: DataService,private toastr: ToastrService) { }

  ngOnInit(): void {
    // logic for <after login user do not redirect to login page  without logout
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }

  onLogin(loginForm: NgForm): void{
    this.api.logIn(loginForm.value)
    .subscribe(res=>{
      console.log('res',res);
      if(res.success === true){
        this.router.navigate(['admin']);
      } else {
        // alert(res.message);
        this.toastr.warning(res.message, 'Warning!');
      }
    })
  }
  
  // onLogin(loginForm: NgForm): void{
  //   if(loginForm.valid){
  //     this.auth.login(loginForm.value).subscribe(
  //       // if login is valid
  //       (res) => { this.router.navigate(['admin']); },

  //       // else login is invalid
  //       (err: Error) => { alert(err.message) },
  //     );
  //   }}



}
