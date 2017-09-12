import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    console.log("news component ts called ");
  }
  newJson:any;

  handlejson(json){
    this.newJson=json;
    console.log("app json is ",this.newJson);
  }
}
