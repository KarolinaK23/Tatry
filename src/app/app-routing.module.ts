import { LoginComponent } from './elements/auth/login/login.component';
import { AccomodationComponent } from './elements/accomodation/accomodation.component';
import { GuidebookComponent } from './elements/guidebook/guidebook.component';
import { ContactComponent } from './elements/contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TrailseComponent } from './elements/trailse/trailse.component';
import { MainComponent } from 'src/app/elements/main/main.component';
import { TrailswComponent } from 'src/app/elements/trailsw/trailsw.component';
import { PeaksComponent } from 'src/app/elements/peaks/peaks.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'elements', children:
[
    {path: 'trailse', component: TrailseComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'guidebook', component: GuidebookComponent},
    {path: 'trailsw', component: TrailswComponent},
    {path: 'accomodation', component: AccomodationComponent},
    {path: 'peaks', component: PeaksComponent},
    {path: 'auth/login', component: LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
