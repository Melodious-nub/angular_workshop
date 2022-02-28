import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','../../../assets/css/style-form.css']
})
export class SignupComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  // Registation Section will update here
  onRegSubmit(registerForm: any){
    console.log(registerForm.value);
  }
  
}
