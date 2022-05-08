import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.css']
})
export class CompanyDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // About Section will update here
    onaboutSubmit(aboutForm: any){
      console.log(aboutForm.value);
    }

}
