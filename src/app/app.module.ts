import { LoginComponent } from './elements/auth/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { ShowcaseComponent } from './elements/showcase/showcase.component';
import { NewsletterComponent } from './elements/newsletter/newsletter.component';
import { FooterComponent } from './elements/footer/footer.component';
import { AccomodationComponent } from './elements/accomodation/accomodation.component';
import { ContactComponent } from './elements/contact/contact.component';
import { GuidebookComponent } from './elements/guidebook/guidebook.component';
import { TrailswComponent } from './elements/trailsw/trailsw.component';
import { TrailseComponent } from './elements/trailse/trailse.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/elements/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeaksComponent } from './elements/peaks/peaks.component';
import { NgbdBasicComponent } from './elements/carousel-basic/carousel-basic.component';
import { CheckedDirective } from './elements/directive/checked.directive';
import { TransformPeakPipe } from './elements/directive/transform-peak.pipe';
/*import { HttpService } from './elements/services/http.service';
//import {PeaksService} from './elements/services/peaks.service'; */
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AuthService} from './elements/auth/auth.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

const config = {
  apiKey: 'AIzaSyBrgf55J-GujbmEUA9je8ip2aNaIJF6wHE',
  authDomain: 'tatry-1901e.firebaseapp.com',
  databaseURL: 'https://tatry-1901e.firebaseio.com',
  projectId: 'tatry-1901e',
  storageBucket: 'tatry-1901e.appspot.com',
  messagingSenderId: '239000405427'
};




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ShowcaseComponent,
    NewsletterComponent,
    FooterComponent,
    AccomodationComponent,
    ContactComponent,
    GuidebookComponent,
    TrailswComponent,
    TrailseComponent,
    PeaksComponent,
    NgbdBasicComponent,
    CheckedDirective,
    TransformPeakPipe,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule




  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
