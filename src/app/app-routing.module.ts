import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule} from '@angular/router';
import { AddAudioComponent } from './add-audio/add-audio.component';
import { AppComponent } from './app.component';



const routes: Routes = [
{ path: '*', component: AppComponent},
{ path: 'upload', component: AddAudioComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule , RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
