import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Passed AuthServices
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    // logic for <after login user do not redirect to login page  without logout
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }

  onLogin(loginForm: any): void{
    if(loginForm.valid){
      this.auth.login(loginForm.value).subscribe(
        // if login is valid
        (result) => { this.router.navigate(['admin']); },

        // else login is invalid
        (err: Error) => { alert(err.message) },
      );
    }
    
  }
}
