import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddAudioService {

   private _postAudio = 'http://localhost:4400/hizruz';


 //  _headers: HttpHeaders = new HttpHeaders().append('Access-Control-Allow-Origin','*').append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT").append("Access-Control-Allow-Headers",'Access-Control-Allow-Origin');
  constructor( private httpClient: HttpClient) {}



  upload($fd) {


    this.httpClient.post<any>(this._postAudio, $fd)
    .subscribe(
      (res) =>console.log(res),
      (err) =>console.log(err)
    );
  }




  /*
  Note:
  i used this to solve the issue with passing user input as parameters :
  https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form

  and this for the form and such:
  https://stackoverflow.com/questions/49993908/angular-and-nodejs-sending-image
  */



}
