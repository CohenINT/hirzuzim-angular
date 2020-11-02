import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { AddAudioComponent } from './add-audio/add-audio.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AddAudioService } from './services/add-audio.service';

//nodejs+ angular fusion

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    AddAudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AddAudioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
