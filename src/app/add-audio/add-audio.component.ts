import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { AddAudioService } from '../services/add-audio.service';
import { debug } from 'util';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'add-audio',
  templateUrl: './add-audio.component.html',
  styleUrls: ['./add-audio.component.scss']
})
export class AddAudioComponent implements OnInit {

  uploadForm: FormGroup;

   firstName = '';
  lastName = '';
  selectedFile: File = null;
  fd = new FormData();
  url = "localhost:4400\postNewAudio";
  form = new FormGroup({
    firstName:new FormControl("",Validators.minLength(1)),
    lastName:new FormControl("",Validators.minLength(1)),


  });


  constructor(private _addService: AddAudioService,private formBuilder: FormBuilder) { }

  formtype = "multipart/form-data";
  createFormData(event) {
    this.selectedFile = event.target.files[0] as File;

    this.form=new FormGroup({
      firstName:new FormControl("",Validators.minLength(1)),
      lastName:new FormControl("",Validators.minLength(1)),
      file:new FormControl(null,[Validators.required])
    });
    debugger;
    // this.uploadForm.get('myfile').setValue(event.target.files[0] as File);

    this.fd.append("file",this.selectedFile, this.selectedFile.name);
    this.fd.append("firstname",this.form.value.firstName);
    this.fd.append("lastname",this.form.value.lastName);



  }
  upload() {


     this._addService.upload(this.form);
  }



  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

}
//TODO: create a recording interface for user with this
//https://medium.com/@bryanjenningz/how-to-record-and-play-audio-in-javascript-faa1b2b3e49b
