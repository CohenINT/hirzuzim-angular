import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddAudioService {

   private _postAudio = "localhost:4400/addFile";

  constructor(private _http: HttpClient) { }

  upload($fd) {
    this._http.post(this._postAudio, $fd)
    .subscribe( result => {

      //TODO: check it is info from response
      alert(result);
    });
  }






}
