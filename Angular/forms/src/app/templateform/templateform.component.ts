import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css'],
})
export class TemplateformComponent implements OnInit {
  contact: Contact = { address: {} };

  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'England'),
  ];

  ngOnInit(): void {}

  onSubmit(ngForm: NgForm) {
    console.log(ngForm.form.value);
    console.log(this.contact);
  }
}

export class Country {
  constructor(public id: string, public name: string) {}
}
export interface Contact {
  firstname?: string;
  lastname?: string;
  email?: string;
  gender?: string;
  isMarried?: boolean;
  country?: string;
  address: {
    city?: string;
    street?: string;
    pincode?: string;
  };
}
