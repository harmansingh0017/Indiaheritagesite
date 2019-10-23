import {Injectable} from '@angular/core';
import { Component, OnInit } from '@angular/core'
import { HertiagesiteService} from './Heritagesite.service'
import {Router} from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {sites} from './sites';
 

@Injectable()
@Component({
    selector: 'Heritagesites',
    template: `
    <div class="heading">
    <h2>India Heritage Sites</h2> 
    </div>
    
    <div *ngIf="products.length == 0 ; else loading">
    No products to display 
    </div>
    <ng-template #loading>
      <div *ngIf="products.length > 0">   
      <div *ngFor="let product of products">
      <div  (click) = "onClick(product.id)" >
      <Heritagesite [data]="product" > </Heritagesite>      
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
    products;

    constructor(heritagesiteService: HertiagesiteService , private _route: Router , private hhtpClient: HttpClient){
        this.products = heritagesiteService.getProducts();
    }
    
    getsites(id: number): sites {
        return this.products.find(e => e.id === id);
    }

    onClick(id: number){
        this._route.navigate(['sites',id]);
    };
     
    onhit(){
        this._route.navigate(['home']);
    }
     
    
}