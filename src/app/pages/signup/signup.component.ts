import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',]
})
export class SignupComponent implements OnInit {

  hide = true;
  isChecked!: boolean;
  // for phone number input
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  // Registation Section will update here
  onRegSubmit(registerForm: any){
    console.log(registerForm.value);
  }
  
}
