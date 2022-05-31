import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private api: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  // Registation Section will update here
  onRegSubmit(registerForm: NgForm){
    console.log(registerForm.value);
    this.api.signUp(registerForm.value)
    .subscribe(res=>{
      if (res.success === true){
        this.toastr.success(res.message, 'Welcome Newbie');
      } else {
        this.toastr.warning(res.message, 'Warning!');
      }
      registerForm.reset();
    })
  }
  
}
