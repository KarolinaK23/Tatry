import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  administrator = 'Karolina Kukla';

  isDisable = true;
  inputText = 'Jan Kowalski';
  maxLength = 5;
  inputEmail = 'example@gmail.com';
  constructor() {
}


  ngOnInit() {
  }

  change() {
   this.isDisable = false;
   this.inputText = 'Twoje Imię i nazwisko';
  this.maxLength = 20;
this.inputEmail = ' ';

  }



}
