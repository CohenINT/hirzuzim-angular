import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule} from '@angular/common/http';
import { AddAudioService } from '../services/add-audio.service';
import { debug } from 'util';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'add-audio',
  templateUrl: './add-audio.component.html',
  styleUrls: ['./add-audio.component.scss']
})
export class AddAudioComponent implements OnInit {

   firstName = '';
  lastName = '';
  selectedFile: File = null;
  fd = new FormData();
  url = "localhost:4400\postNewAudio";
  form = new FormGroup({
    firstName:new FormControl("",Validators.minLength(1)),
    lastName:new FormControl("",Validators.minLength(1))

  });


  constructor(private _addService: AddAudioService) { }

  createFormData(event)
  {
    this.selectedFile = event.target.files[0] as File;
    this.fd.append("file",this.selectedFile,this.selectedFile.name);
    this.fd.append("firstname",this.form.value.firstName);
    this.fd.append("lastname",this.form.value.lastName);



  }
  upload() {


     this._addService.upload(this.fd);
  }



  ngOnInit() {
  }

}
//TODO: create a recording interface for user with this
//https://medium.com/@bryanjenningz/how-to-record-and-play-audio-in-javascript-faa1b2b3e49b
