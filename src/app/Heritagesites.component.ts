import {Injectable} from '@angular/core';
import { Component, OnInit } from '@angular/core'
import { HertiagesiteService} from './Heritagesite.service'
import {Router} from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Heritagesites} from './heritagesites';
 

@Injectable()
@Component({
    selector: 'Heritagesites',
    template: `
    <div class="heading">
    <h2>India Heritage Sites</h2> 
    </div>  
    <div *ngIf="sites.length == 0 ; else loading">
    Nothing to display 
    </div>
    <ng-template #loading>
      <div *ngIf="sites.length > 0">   
      <div *ngFor="let site of sites">
      <div  (click) = "onClick(site.id)" >
      <Heritagesite [data]="site" > </Heritagesite>      
        </div>       
      </div>         
    </div>
    <router-outlet></router-outlet> 
        `,
     styles:[`
     h2 {
         margin : 30px 550px ;
         font-size: 40px;
     },
      heading {
         color: black;
     }
     `],
    providers: [HertiagesiteService]    
})
export class HeritagesitesComponent {
    sites;

    constructor(heritagesiteService: HertiagesiteService , private _route: Router , private hhtpClient: HttpClient){
        this.sites = heritagesiteService.getProducts();
    }
    
    getsites(id: number): Heritagesites {
        return this.sites.find(e => e.id === id);
    }

    onClick(id: number){
        this._route.navigate(['sites',id]);
    };       
}