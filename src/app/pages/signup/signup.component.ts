import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

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
  dropValue = 1;

  constructor(private api: DataService) { }

  ngOnInit(): void {
  }

  // Registation Section will update here
  onRegSubmit(registerForm: NgForm){
    console.log(registerForm.value);
    
    this.api.signUp(registerForm.value)
    .subscribe(res=>{
      alert(res.message);
      registerForm.reset();
    })
  }
  
}
