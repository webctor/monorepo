import { Component, OnInit } from '@angular/core';
import {ContactForm} from '../valueobjects/contactform'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'my-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() { }

  ngOnInit() {
  }

  processForm() {

    const allInfo = `My name is ${this.contactform.name}. 
      My email is ${this.contactform.email}. 
      My message is ${this.contactform.message}`;
    alert(allInfo);
  }


}
