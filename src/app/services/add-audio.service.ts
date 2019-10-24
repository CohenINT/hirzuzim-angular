import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AddAudioService {

   private _postAudio = "http://localhost:4400/addFile";

   _headers: HttpHeaders = new HttpHeaders().append('content-type', 'multipart/form-data').append('Access-Control-Allow-Origin','*').append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT").append("Access-Control-Allow-Headers",'Access-Control-Allow-Origin');
  constructor(private _http: HttpClient) {

   }



  upload($fd) {


    this._http.post(this._postAudio, $fd,{headers:this._headers})
    .subscribe( result => {

      //TODO: check it is info from response
      alert(result);
    });
  }




  /*
  Note:
  i used this to solve the issue with passing user input as parameters :
  https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form

  and this for the form and such:
  https://stackoverflow.com/questions/49993908/angular-and-nodejs-sending-image
  */



}
