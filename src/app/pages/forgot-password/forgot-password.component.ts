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

  ngOnInit() {
    // for jquery dynamic loading
    // this.loadScript('../assets/js/js/jquery.js');
    // this.loadScript('../assets/js/js/plugins.min.js');
    // this.loadScript('../assets/js/js/functions.js');
  }

  // for jquery dynamic loading
//  public loadScript(url: string) {
//     const body = <HTMLDivElement> document.body;
//     const script = document.createElement('script');
//     script.innerHTML = '';
//     script.src = url;
//     script.async = true;
//     script.defer = true;
//     body.appendChild(script);
//   }

}
