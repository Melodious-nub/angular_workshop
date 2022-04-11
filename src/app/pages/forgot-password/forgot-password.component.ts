import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css','../landing/landing.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  faLock = faLock;

  email_recovery = 'yourmail@mail.com';

  constructor() { }

  ngOnInit(): void {
  }

}
