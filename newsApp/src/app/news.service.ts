import {Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Http,Response,HttpModule} from '@angular/http';
@Injectable() 
export class NewsService{
     

      constructor(private http:Http){ }
        g(temp){   
        if(temp===""){
          window.alert("please enter channel name");
        }
       
    else return this.http.get(`https://newsapi.org/v1/articles?source=${temp}&sortBy=top&apiKey=b5f49c5a1ff44e809edf16a485502c24`).map((res:Response)=>res.json());
      }
      
      h(){

       return this.http.get("https://newsapi.org/v1/sources?language=en").map((res:Response)=>res.json());

      }
    
}