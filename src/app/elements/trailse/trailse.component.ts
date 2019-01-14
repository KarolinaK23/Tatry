import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-trailse',
  templateUrl: './trailse.component.html',
  styleUrls: ['./trailse.component.css']
})
export class TrailseComponent implements OnInit {

  constructor( private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

}
