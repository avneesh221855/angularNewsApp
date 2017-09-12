import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {Http,Response,HttpModule} from '@angular/http';
import {NewsService} from '../news.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private apiUrl='https://pixabay.com/api/?key=6367787-11ab3f778405cc0749bba83a3&q=';
  private apiUrlSource="https://newsapi.org/v1/sources?language=en"
  data:any={};
  data1:any={};
  stat=false;
  temp="";
  @Output() searchData:EventEmitter<any>=new EventEmitter();

  constructor(private http:Http,private newsService:NewsService ){}
  ngOnInit() {

  this.getNewsUrl();
     }

  getNewsUrl(){
    
        return this.newsService.h().subscribe(data1=>{console.log("first josn....");this.data1=data1;
     });
    
     }

     getData(temp){
      console.log("hello"+temp)
    
            this.newsService.g(temp).subscribe(data=>{console.log("secondjson.....");this.data=data;console.log(this.data)  ;
            this.searchData.emit(this.data);})
     
    }

}
