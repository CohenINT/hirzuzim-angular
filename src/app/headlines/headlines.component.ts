import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  Firstheader = 'טופס הגשת חיצרוץ';
  Secondheader = 'מלאו את הפרטים הבאים והעלו את קובץ האודיו';
  constructor() { }

  ngOnInit() {


  }

}
