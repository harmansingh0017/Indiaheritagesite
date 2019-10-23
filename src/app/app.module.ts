import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms' ;
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HeritagesiteComponent} from'./Heritagesite.component' ;
import {RatingComponent} from'./rating.component' ;
import {HeritagesitesComponent} from'./Heritagesites.component' ;
import {TruncatePipe} from'./truncate.pipe' ;
import {JumboTronComponent} from'./jumbotron.component' ;
import { AboutComponent } from "./AboutComponent";
//import { routing } from './app.routing';
import { HeritagesiteDetailsComponent } from './heritagesite-details.component';
import {RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { HertiagesiteService } from './Heritagesite.service';



 const approot: Routes = [  
  {path:'sites/:id', component:HeritagesiteDetailsComponent},
  {path:'', component:HeritagesitesComponent  },
  {path:'About', component:AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent , 
    HeritagesiteComponent , 
    TruncatePipe ,
    JumboTronComponent ,
     HeritagesitesComponent ,
      RatingComponent,
      HeritagesiteDetailsComponent  ,
      AboutComponent
  ],
  imports: [
    BrowserModule ,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule , 
    RouterModule.forRoot(approot),
    
    
  ],
  providers: [HertiagesiteService ]  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
