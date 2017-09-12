import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {NewsService} from './news.service';
import {RouterModule} from'@angular/router';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {AddToFavouriteService} from './add-to-favourite.service'


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { GetFavouriteComponent } from './get-favourite/get-favourite.component';
import { NewsComponent } from './news/news.component';
import {RegistrationComponent} from './registration/registration.component';
import { JumboComponent } from './jumbo/jumbo.component'




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    DetailsComponent,
    GetFavouriteComponent,
    NewsComponent,
    RegistrationComponent,
    JumboComponent
  

  ],
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([
     
      {
        path: 'app-get-favourite',
        component: GetFavouriteComponent,
      },
      {
        path: 'app-news',
        component: NewsComponent,
      },
      {
        path: 'app-registration',
        component: RegistrationComponent,
      }
,
{
  path: '',
  component: JumboComponent,
}
    ]),
    HttpModule,
    NgxPaginationModule
  ],
  providers: [NewsService,AddToFavouriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
