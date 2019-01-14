import { Component, OnInit } from '@angular/core';
/*import { PeaksService } from '../services/peaks.service'; */

@Component({
  selector: 'app-peaks',
  templateUrl: './peaks.component.html',
  styleUrls: ['./peaks.component.css']
})
export class PeaksComponent implements OnInit {
  newPeak: string;
  peaksList: Array<string> = [];

 /* constructor(private peaksService: PeaksService) {} */

  add() {
    this.peaksList.push(this.newPeak);
    this.newPeak = '';
    console.log(this.peaksList); }

    remove(peak: string) {
      this.peaksList = this.peaksList.filter( e => e !== peak);
    }










  ngOnInit() {
  }

}
