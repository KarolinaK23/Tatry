/*import { Peak } from './../models/peak';
import { Injectable } from '../../../../node_modules/@angular/core';
import { BehaviorSubject, Observable } from '../../../../node_modules/rxjs';
import {HttpService} from './http.service';


@Injectable()
export class PeaksService {

  private peaksListObs = new BehaviorSubject<Array<Peak>>([]);

  constructor(private httpService: HttpService) {
   this.httpService.getPeaks().subscribe(list => {
      this.peaksListObs.next(list);
    });
  }
  add(peak: Peak) {
    const list = this.peaksListObs.getValue();
    list.push(peak);
    this.peaksListObs.next(list);
  }

  remove(peak: Peak) {
    const list = this.peaksListObs.getValue().filter(e => e !== peak);
    this.peaksListObs.next(list);
  }


  getPeaksListObs(): Observable<Array<Peak>> {
    return this.peaksListObs.asObservable();
  }
  savePeaksInDb() {
    this.httpService.savePeaks(this.peaksListObs.getValue());
  }
}
*/
