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
import { FormsModule } from '@angular/forms';
import { PeaksComponent } from './elements/peaks/peaks.component';
import { NgbdBasicComponent } from './elements/carousel-basic/carousel-basic.component';
import { CheckedDirective } from './elements/directive/checked.directive';
import { TransformPeakPipe } from './elements/directive/transform-peak.pipe';
/*import { HttpService } from './elements/services/http.service';
//import {PeaksService} from './elements/services/peaks.service'; */
import { HttpClientModule } from '../../node_modules/@angular/common/http';


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
    TransformPeakPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
