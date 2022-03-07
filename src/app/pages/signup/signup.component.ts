import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','../../../assets/css/style-form.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  isCheacked!: boolean;
  // for phone number input
  model: any = {};
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

  constructor() { }

  ngOnInit(): void {
  }

  // Registation Section will update here
  onRegSubmit(registerForm: any){
    console.log(registerForm.value);
  }
  
}
