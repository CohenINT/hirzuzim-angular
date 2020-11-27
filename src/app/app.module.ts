import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { AddAudioComponent } from './add-audio/add-audio.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { DropzoneDirective } from './dropzone.directive';

// Firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';



const firebaseConfig = {
  apiKey: 'AIzaSyAzq7Vg9YFJSkbRqctsCqaM_IW5YCB2lSM',
  authDomain: 'hirzuzim.firebaseapp.com',
  databaseURL: 'https://hirzuzim.firebaseio.com',
  projectId: 'hirzuzim',
  storageBucket: 'hirzuzim.appspot.com',
  messagingSenderId: '419262309977',
  appId: '1:419262309977:web:1b07dac556659102a07348'
};



@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    AddAudioComponent,
    DropzoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
