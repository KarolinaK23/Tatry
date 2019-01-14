import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  isDisable = true;
  value = '';

  constructor() { }

  onSubmit(event) {
    if (event.includes('@')) {
      this.isDisable = false;
    } else {
      this.isDisable = true;
    }

  }

  ngOnInit() {
  }

}
