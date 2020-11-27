import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";
import { AddAudioService } from "../services/add-audio.service";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { debugOutputAstAsTypeScript } from "@angular/compiler";

@Component({
  selector: "add-audio",
  templateUrl: "./add-audio.component.html",
  styleUrls: ["./add-audio.component.scss"],
})
export class AddAudioComponent implements OnInit {
  form;
  firstName = "";
  lastName = "";
  selectedFile: File = null;
  fd: FormData = new FormData();
  url = "localhost:4400\\postNewAudio";
  fileByteArray: any[] = [];

  constructor(
    private _addService: AddAudioService,
    private formBuilder: FormBuilder
  ) {}

  formtype = "multipart/form-data";

  createFormData(event) {
    this.selectedFile = event.target.files[0] as File;
    console.log("filename : ");
    console.log(this.selectedFile);

    this.fd.append("myfile", this.selectedFile, this.selectedFile.name);
    this.fd.append("firstname", this.form.value.firstName);
    this.fd.append("lastname", this.form.value.lastName);
    let _data: any = {
      filename: "ExampleAudio",
      id: "0001",
    };

    this.fd.append("data", JSON.stringify(_data));
    const fr: FileReader = new FileReader();

    fr.readAsArrayBuffer(this.selectedFile);
    fr.onprogress = () => {
      console.log("uploading file....");
    };
    fr.onloadend = (e) => {
      console.log("e : ");
      console.log(fr.result);
      if (e.target.readyState === e.target.DONE)
        {
        this._addService.stream(fr.result).subscribe(
          (response) => this.handleRes(response),
          (error) => this.handleErr(error)
        );
      }
    };
  }
  handleRes(response: any) {}

  handleErr(error: any) {}
  upload() {
    this._addService.upload(this.fd);
  }

  ngOnInit() {
    // this.uploadForm = this.formBuilder.group({
    //   profile: ['']
    // });
    this.form = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      myfile: new FormControl(),
    });
  }
}
//TODO: create a recording interface for user with this
//https://medium.com/@bryanjenningz/how-to-record-and-play-audio-in-javascript-faa1b2b3e49b
