import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onmemberSubmit(membershipForm: NgForm) {
    console.log(membershipForm.value);

  }

}
