/*import { Peak } from './../models/peak';
import { Injectable } from '../../../../node_modules/@angular/core';
import { HttpClient } from '../../../../node_modules/@types/selenium-webdriver/http';
import { Observable } from '../../../../node_modules/rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://cloud.mongodb.com/v2/5bae302197019956e1c8a029#metrics/replicaSet/5bae38bd970199747f56932c/explorer/Peaks' ;
  readonly param = new HttpParams().set('apiKey', 'tutaj wstaw swój API key');


 constructor(private http: HttpClient) {
  this.getPeaks();
  }


 getPeaks(): Observable<Array<Peak>> {
 return this.http.get<Array<Peak>>(this.URL_DB, { params: this.param });
  }

 savePeaks(list: Array<Peak>) {
 this.http.put(this.URL_DB, list, { params: this.param }).subscribe(data => {
    console.log(data);
   });
  }
}
*/
