import { Component } from '@angular/core';
import {Http,Response,HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import {NewsService} from './news.service';
@
Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:Http,private newsService:NewsService ){ }
  }
  