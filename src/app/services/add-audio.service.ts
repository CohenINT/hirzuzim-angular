import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class AddAudioService {
  private postAudio = "http://localhost:4400/hizruz/upload";

  //_headers: HttpHeaders = new HttpHeaders().append('Access-Control-Allow-Origin','*').append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT").append("Access-Control-Allow-Headers",'Access-Control-Allow-Origin');
  constructor(private httpClient: HttpClient) {}

  upload($fd) {
    this.httpClient.post<any>(this.postAudio, $fd).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  stream($buffer: any): Observable<{}>
  {
    console.log($buffer);

    return this.httpClient.post<any>(this.postAudio, $buffer);

  }

  /*
  Note:
  i used this to solve the issue with passing user input as parameters :
  https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form

  and this for the form and such:
  https://stackoverflow.com/questions/49993908/angular-and-nodejs-sending-image
  */
}
