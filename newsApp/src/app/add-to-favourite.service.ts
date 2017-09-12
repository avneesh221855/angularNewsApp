import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Http,Response,HttpModule,Headers} from '@angular/http'
import {FavoriteList} from './FavoriteList';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AddToFavouriteService {

  data:any={}
url:string="http://localhost:63670/api/news";

  constructor(private http:Http) { }
  private headers = new Headers({'Content-Type':'application/json'});


  postData(news:FavoriteList){
  return this.http.post(this.url,news,{headers:this.headers}).subscribe(data=>{this.data=data;
    console.log("data from postr req"+this.data)});
  
  }


  getData(){
    return this.http.get(this.url).map((res:Response)=>res.json());
  }


  deleteData(id:number){
    console.log("id is "+id);
    return this.http.delete(this.url+'/'+id).subscribe(data=>{console.log("data from postr req"+this.data)});
  }
  updateData(d:any){
    console.log("this is called from service"+d);
    return this.http.put(`http://localhost:63670/api/news/${d.id}`,JSON.stringify(d),
    {headers:new Headers({'Content-Type':'application/json'})}).subscribe();
  }
}
