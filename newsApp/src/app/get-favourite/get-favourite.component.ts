import { Component, OnInit } from '@angular/core';
import {AddToFavouriteService} from '../add-to-favourite.service'
import {FavoriteList} from '../FavoriteList'

@Component({
  selector: 'app-get-favourite',
  templateUrl: './get-favourite.component.html',
  styleUrls: ['./get-favourite.component.css']
})
export class GetFavouriteComponent implements OnInit {
 data2:Array<any>
 id:number;
  constructor(private addFavourite:AddToFavouriteService) { }
  F:FavoriteList;
  ngOnInit() {
this.getFav();
  }

  getFav(){
    console.log("get method for fav");
   this.addFavourite.getData().subscribe(data2=>{console.log("get fav datat"+data2);this.data2=data2;
  });
 
  }
 
  deleteFav(id){
    console.log("get fav component cqll and id "+id);
    this.addFavourite.deleteData(id);
    this.getFav();
 
  

  }
  addCommnet(news:any,values:string){
  news.comment=values;
  console.log(news.comment);
    this.addFavourite.updateData(news);
  }

  }

