import { Component, OnInit,Input } from '@angular/core';
import {AddToFavouriteService} from '../add-to-favourite.service'
import {FavoriteList} from '../FavoriteList'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {



  @Input() detail1:any;
  constructor(private favService:AddToFavouriteService) {
    
   }

addFav(fav:FavoriteList){
  console.log("data posted from Detaiis conpoent from ts ");
  this.favService.postData(fav);
  
}

}
