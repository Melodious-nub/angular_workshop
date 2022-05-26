import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private auth: AuthService, private router: Router,private api: DataService) { }

  ngOnInit(): void {
    // logic for <after login user do not redirect to login page  without logout
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }

  onLogin(loginForm: NgForm): void{
    console.log(loginForm.value);
    this.api.logIn(loginForm.value)
    .subscribe(res=>{
      if(res.success === true){
        this.router.navigate(['admin']);
      } else {
        alert(res.message);
      }
    })
  }



}
